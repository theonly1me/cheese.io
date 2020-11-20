import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Recipe } from '../../recipe.model';

@Component({
  selector: 'app-recipe-item',
  templateUrl: 'recipe-item.component.html',
  styleUrls: ['recipe-item.component.css'],
})
export class RecipeItemComponent implements OnInit {
  @Input() recipes?: Recipe[];
  @Output() recipeClicked = new EventEmitter<Recipe>();

  constructor() {}

  ngOnInit() {}

  onRecipeSelected(event: any): void {
    const name = event.target.closest('div').querySelector('h4').textContent;
    const description = event.target.closest('div').querySelector('p')
      .textContent;
    const clickedRecipe = new Recipe(name, description, '_');
    this.recipeClicked.emit(clickedRecipe);
  }
}
