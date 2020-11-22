import { EventEmitter, Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingService } from '../shopping-list/shopping.service';
import { Recipe } from './recipe.model';

@Injectable({ providedIn: 'root' })
export class RecipeService {
  private recipes: Recipe[] = [
    new Recipe(
      `Margherita Pizza`,
      `Neapolitan pizza, made with San 
      Marzano tomatoes, mozzarella cheese, fresh basil, 
      salt and extra-virgin olive oil.`,
      `https://cook.fnr.sndimg.com/content/dam/images/cook/fullset/2011/1/6/0/CCEV103_Margherita-Pizza_s4x3.jpg.rend.hgtvcom.616.462.suffix/1416867304309.jpeg`,
      [
        new Ingredient('Tomatoes', 2),
        new Ingredient('Cheese Slices', 4),
        new Ingredient('Basil Leaves', 10),
      ]
    ),
    new Recipe(
      `Tatertot Casserole`,
      `Quick and easy casserole everyone will love!`,
      `https://cook.fnr.sndimg.com/content/dam/images/cook/fullset/2012/6/15/0/CC_Hot-Dish-Tater-Tot-Casserole-Recipe_s4x3.jpg.rend.hgtvcom.826.620.suffix/1358449564114.jpeg`,
      [
        new Ingredient('Tater Tots', 10),
        new Ingredient('Carrots', 3),
        new Ingredient('Beans', 10),
      ]
    ),
  ];

  constructor(private slService: ShoppingService) {}

  recipeSelected = new EventEmitter<Recipe>();

  getRecipes(): Recipe[] {
    //using slice without arguments to return a copy of original array
    return this.recipes.slice();
  }

  getRecipeByID(id: number): Recipe {
    return this.recipes[id];
  }

  addIngredientsToSL(ingredients: Ingredient[]) {
    this.slService.ingredients.forEach((slIng, _, slArr) => {
      ingredients.forEach(ing => {
        if (slIng.name.toLowerCase() === ing.name.toLowerCase()) {
          slIng.amount += ing.amount;
        } else {
          if (
            !slArr.find(el => el.name.toLowerCase() === ing.name.toLowerCase())
          ) {
            slArr.push(ing);
          }
        }
      });
    });
  }
}
