import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Recipe } from '../../recipe.model';
import { RecipeService } from '../../recipe.service';

@Component({
  selector: 'app-recipe-item',
  templateUrl: 'recipe-item.component.html',
  styleUrls: ['recipe-item.component.css'],
})
export class RecipeItemComponent implements OnInit {
  recipes = this.recipeService.getRecipes();
  // @Output() recipeClicked = new EventEmitter<number>();

  constructor(private recipeService: RecipeService) {}

  ngOnInit() {}

  // onRecipeSelected(index: any): void {
  //   //using ! non null assertion operator.
  //   this.recipeService.recipeSelected.emit(this.recipes![index]);
  //   // this.recipeClicked.emit(index);
  // }
}
