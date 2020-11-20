import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: 'recipe-list.component.html',
  styleUrls: ['recipe-list.component.css'],
})
export class RecipeListComponent implements OnInit {
  @Output() clickedRecipe? = new EventEmitter<Recipe>();
  recipes: Recipe[] = [
    new Recipe(
      `Margherita Pizza`,
      `Neapolitan pizza, made with San 
  Marzano tomatoes, mozzarella cheese, fresh basil, 
  salt and extra-virgin olive oil.`,
      `https://cook.fnr.sndimg.com/content/dam/images/cook/fullset/2011/1/6/0/CCEV103_Margherita-Pizza_s4x3.jpg.rend.hgtvcom.616.462.suffix/1416867304309.jpeg`
    ),
    new Recipe(
      `Tatertot Casserole`,
      `Quick and easy casserole everyone will love!`,
      `https://cook.fnr.sndimg.com/content/dam/images/cook/fullset/2012/6/15/0/CC_Hot-Dish-Tater-Tot-Casserole-Recipe_s4x3.jpg.rend.hgtvcom.826.620.suffix/1358449564114.jpeg`
    ),
  ];

  constructor() {}

  ngOnInit() {}

  getSelectedRecipe(data: Recipe) {
    let clicked = this.recipes.filter((recipe) => recipe.name === data.name);
    this.clickedRecipe?.emit(...clicked);
  }
}
