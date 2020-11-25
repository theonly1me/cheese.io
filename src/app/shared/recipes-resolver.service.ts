import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  Resolve,
  RouterStateSnapshot,
} from '@angular/router';
import { Recipe } from '../recipe-book/recipe.model';
import { RecipeService } from '../recipe-book/recipe.service';
import { DataService } from './data.service';

@Injectable({
  providedIn: 'root',
})
export class RecipesResolverService implements Resolve<Recipe[]> {
  constructor(
    private dataService: DataService,
    private recipeService: RecipeService
  ) {}
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    if (!this.recipeService.getRecipes().length)
      return this.dataService.fetchData();
    else return this.recipeService.getRecipes();
  }
}
