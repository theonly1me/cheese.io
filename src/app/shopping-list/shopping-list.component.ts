import { Component, OnInit } from '@angular/core';
import { RecipeService } from '../recipe-book/recipe.service';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingService } from './shopping.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: 'shopping-list.component.html',
  styleUrls: ['shopping-list.component.css'],
})
export class ShoppingListComponent implements OnInit {
  ingredients?: Ingredient[];
  constructor(
    private shoppingService: ShoppingService,
    private recipeServie: RecipeService
  ) {}

  ngOnInit() {
    this.ingredients = this.shoppingService.getIngredients();
  }

  getNewIng(data: Ingredient) {
    this.ingredients?.forEach(ing => {
      if (ing.name === data.name) {
        ing.amount += data.amount;
        console.log(ing.name, ing.amount);
      } else {
        if (
          !this.ingredients!.find(
            el => el.name.toLowerCase() === data.name.toLowerCase()
          )
        ) {
          this.ingredients!.push(data);
        }
      }
    });
  }
}
