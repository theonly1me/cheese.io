import { Component, OnInit } from '@angular/core';
import { Recipe } from './recipe.model';
import { RecipeService } from './recipe.service';

@Component({
  selector: 'app-recipe-book',
  templateUrl: 'recipe-book.component.html',
  styleUrls: ['recipe-book.component.css'],
})
export class RecipeBookComponent implements OnInit {
  recipe?: Recipe;
  showDetails = false;
  constructor(private recipeService: RecipeService) {}
  ngOnInit() {
    this.recipeService.recipeSelected.subscribe((data: Recipe) => {
      this.recipe = data;
    });
  }
  // onRecipeClick(data: Recipe) {
  //   this.recipe = data;
  //   this.showDetails = true;
  // }
}
