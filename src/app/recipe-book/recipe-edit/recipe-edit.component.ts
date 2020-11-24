import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';
import { RecipeService } from '../recipe.service';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.css'],
})
export class RecipeEditComponent implements OnInit, OnDestroy {
  id?: number;
  editMode = false;
  subscriber?: Subscription;
  recipeEditForm?: FormGroup;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private recipeService: RecipeService
  ) {}

  ngOnInit(): void {
    this.subscriber = this.route.params.subscribe((params: Params) => {
      const { id } = params;
      this.id = +id;
      this.editMode = id !== undefined; // checking if edit mode or not, if id is available it's edit mode
      this.formInit();
    });
  }

  ngOnDestroy(): void {
    this.subscriber!.unsubscribe();
  }

  formInit() {
    let recipeName = '';
    let description = '';
    let imagePath = '';
    let ingredients = new FormArray([]);

    if (this.editMode) {
      let recipe = this.recipeService.getRecipeByID(this.id!);
      recipeName = recipe.name;
      description = recipe.description;
      imagePath = recipe.imagePath;
      recipe.ingredients?.forEach(ing => {
        ingredients.push(
          new FormGroup({
            ingredient: new FormControl(ing.name, Validators.required),
            amount: new FormControl(ing.amount, [
              Validators.required,
              Validators.pattern(/^[1-9]+[0-9]*$/),
            ]),
          })
        );
      });
    }

    this.recipeEditForm = new FormGroup({
      name: new FormControl(recipeName, [Validators.required]),
      imagePath: new FormControl(imagePath, [Validators.required]),
      description: new FormControl(description, Validators.required),
      ingredients: ingredients,
    });
  }

  get ingControls() {
    return (<FormArray>this.recipeEditForm?.get('ingredients')).controls;
  }

  onAddIngredient() {
    this.ingControls.push(
      new FormGroup({
        ingredient: new FormControl('', Validators.required),
        amount: new FormControl(null, [
          Validators.required,
          Validators.pattern(/^[1-9]+[0-9]*$/),
        ]),
      })
    );
  }

  onSubmit() {
    console.log(this.recipeEditForm);
    const name = this.recipeEditForm!.value.name;
    const imagePath = this.recipeEditForm!.value.imagePath;
    const description = this.recipeEditForm!.value.description;
    let ingredients = this.ingControls.map(formGroup => {
      return new Ingredient(formGroup.value.ingredient, formGroup.value.amount);
    });
    const recipe = new Recipe(name, description, imagePath, ingredients);
    this.recipeService.addRecipe(recipe);
    this.router.navigate(['../'], { relativeTo: this.route });
  }

  onCancel() {
    this.router.navigate(['../'], { relativeTo: this.route });
  }

  deleteIngredient(index: number) {
    (<FormArray>this.recipeEditForm?.get('ingredients')).removeAt(index);
  }
}
