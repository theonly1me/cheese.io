import {
  Component,
  EventEmitter,
  Input,
  OnDestroy,
  OnInit,
  Output,
} from '@angular/core';
import { Subscription } from 'rxjs';
import { Recipe } from '../../recipe.model';
import { RecipeService } from '../../recipe.service';

@Component({
  selector: 'app-recipe-item',
  templateUrl: 'recipe-item.component.html',
  styleUrls: ['recipe-item.component.css'],
})
export class RecipeItemComponent implements OnInit, OnDestroy {
  recipes = this.recipeService.getRecipes();
  updateRecipeSub?: Subscription;
  // @Output() recipeClicked = new EventEmitter<number>();

  constructor(private recipeService: RecipeService) {}

  ngOnInit() {
    this.recipeService.updatedRecipe.subscribe((recipes: Recipe[]) => {
      console.log(this);
      this.recipes = recipes;
    });
  }

  ngOnDestroy() {
    this.updateRecipeSub?.unsubscribe();
  }

  // onRecipeSelected(index: any): void {
  //   //using ! non null assertion operator.
  //   // this.recipeService.recipeSelected.next(this.recipes![index]);
  //   // this.recipeClicked.emit(index);
  // }
}
