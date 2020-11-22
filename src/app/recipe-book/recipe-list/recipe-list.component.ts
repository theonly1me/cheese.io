import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-list',
  templateUrl: 'recipe-list.component.html',
  styleUrls: ['recipe-list.component.css'],
})
export class RecipeListComponent implements OnInit {
  // @Output() clickedRecipe = new EventEmitter<Recipe>();
  // recipes: Recipe[] = [];

  constructor(private router: Router, private route: ActivatedRoute) {}

  ngOnInit() {
    // this.recipes = this.recipeService.getRecipes();
  }

  onNewRecipe() {
    this.router.navigate(['new'], { relativeTo: this.route });
  }
  // getSelectedRecipe(index: number) {
  //   this.clickedRecipe?.emit(this.recipes[index]);
  // }
}
