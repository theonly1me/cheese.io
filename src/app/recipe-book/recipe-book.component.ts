import { Component, OnInit } from '@angular/core';
import { Recipe } from './recipe.model';

@Component({
  selector: 'app-recipe-book',
  templateUrl: 'recipe-book.component.html',
  styleUrls: ['recipe-book.component.css'],
})
export class RecipeBookComponent implements OnInit {
  recipe?: Recipe;
  showDetails = false;
  constructor() {}
  ngOnInit() {}
  onRecipeClick(data: Recipe) {
    console.log(data);
    this.recipe = data;
    this.showDetails = true;
  }
}
