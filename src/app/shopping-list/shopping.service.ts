import { Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

@Injectable({ providedIn: 'root' })
export class ShoppingService {
  ingredients: Ingredient[] = [
    new Ingredient(`Apples`, 5),
    new Ingredient(`Tomatoes`, 10),
  ];

  constructor() {}

  getIngredients(): Ingredient[] {
    return this.ingredients;
  }
}
