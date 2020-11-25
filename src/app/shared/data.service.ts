import { Inject, Injectable } from '@angular/core';
import { Recipe } from '../recipe-book/recipe.model';
import { HttpClient, HttpParams } from '@angular/common/http';
import { RecipeService } from '../recipe-book/recipe.service';
import { ThrowStmt } from '@angular/compiler';
import { exhaustMap, map, take, tap } from 'rxjs/operators';
import { AuthService } from '../auth/auth.service';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  constructor(
    private http: HttpClient,
    private recipeService: RecipeService,
    private authService: AuthService
  ) {}

  saveData() {
    this.http
      .put<Recipe[]>(
        'https://cheese-io.firebaseio.com/recipes.json',
        this.recipeService.getRecipes()
      )
      .subscribe(data => console.log(data));
  }

  fetchData() {
    // return this.authService.user.pipe(
    //   //first subscribe to user BehaviorSubject to get User Obj
    //   take(1), // specify that you only want to do it 1 time using take operator
    //   exhaustMap(user => {
    //use exhauseMap operator to do the remaining actions after take and return it
    return this.http
      .get<Recipe[]>(
        'https://cheese-io.firebaseio.com/recipes.json'
        // {
        //   // params: new HttpParams().set('auth', user.token!),
        // })
      )
      .pipe(
        map(recipes => {
          //chain remaining operators such as map and tap
          return recipes.map(recipe => {
            return {
              ...recipe,
              ingredients: recipe.ingredients ? recipe.ingredients : [],
            };
          });
        }),
        tap(data => this.recipeService.setRecipes(data))
      );
    // }),
  }
}
