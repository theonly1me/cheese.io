import { Component, OnDestroy, OnInit } from '@angular/core';
// import { RecipeService } from '../recipe-book/recipe.service';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingService } from './shopping.service';
import { Subscription } from 'rxjs';
// import { Store } from '@ngrx/store';

@Component({
  selector: 'app-shopping-list',
  templateUrl: 'shopping-list.component.html',
  styleUrls: ['shopping-list.component.css'],
})
export class ShoppingListComponent implements OnInit, OnDestroy {
  ingredients?: Ingredient[];
  selectedIngredient?: Ingredient;
  selectedSub?: Subscription;
  constructor(
    private shoppingService: ShoppingService // private store: Store<{ shoppingList: { ingredients: Ingredient[] } }>
  ) {}

  ngOnInit() {
    //shoppingList mapped to shoppingListReducer function in app.module.ts
    // this.store.select('shoppingList');
    this.ingredients = this.shoppingService.getIngredients();
    this.selectedSub = this.shoppingService.getSelectedIngredient.subscribe(
      (ingredient: Ingredient) => {
        this.ingredients?.splice(
          this.ingredients?.findIndex(ing => ing.name === ingredient.name),
          1
        );
      }
    );
  }

  getNewIng(data: Ingredient) {
    if (!this.ingredients?.length) {
      this.ingredients?.push(data);
      return;
    }
    this.ingredients?.forEach(ing => {
      if (ing.name === data.name) {
        ing.amount = data.amount;
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

  onSelectIngredient(ingredient: Ingredient) {
    this.selectedIngredient = ingredient;
  }

  ngOnDestroy() {
    this.selectedSub?.unsubscribe();
  }
}
