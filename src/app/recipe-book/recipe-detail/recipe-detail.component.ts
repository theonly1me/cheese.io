import { Component, OnInit, Input, OnChanges, OnDestroy } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: 'recipe-detail.component.html',
  styleUrls: ['recipe-detail.component.css'],
})
export class RecipeDetailComponent implements OnInit, OnChanges, OnDestroy {
  recipe?: Recipe;
  id?: number;
  addedToList = false;
  subscriber?: Subscription;
  constructor(
    private recipeService: RecipeService,
    private route: ActivatedRoute,
    private router: Router
  ) {}
  ngOnInit() {
    this.subscriber = this.route.params.subscribe((params: Params) => {
      const { id } = params;
      this.id = +id;
      this.recipe = this.recipeService.getRecipeByID(+id);
    });
  }
  ngOnChanges() {
    this.addedToList = false;
  }

  handleToShoppingList() {
    if (!this.addedToList) {
      this.recipeService.addIngredientsToSL(
        //Do not want the original array to be shallow copied
        JSON.parse(JSON.stringify(this.recipe!.ingredients))
      );
      this.addedToList = true;
    }
  }

  onRecipeEdit() {
    this.router.navigate(['edit'], { relativeTo: this.route });
  }

  ngOnDestroy(): void {
    this.subscriber!.unsubscribe();
  }
}
