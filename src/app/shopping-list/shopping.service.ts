import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Ingredient } from '../shared/ingredient.model';

@Injectable({ providedIn: 'root' })
export class ShoppingService {
  ingredients: Ingredient[] = [
    new Ingredient(`Apples`, 5),
    new Ingredient(`Tomatoes`, 10),
  ];

  constructor() {}

  getSelectedIngredient = new Subject<Ingredient>();

  getIngredients(): Ingredient[] {
    return this.ingredients;
  }
}
