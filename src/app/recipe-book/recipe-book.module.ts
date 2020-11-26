import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';

import { RecipeBookComponent } from './recipe-book.component';
import { RecipeBookRoutingModule } from './recipe-book.routing.module';
import { RecipeDetailComponent } from './recipe-detail/recipe-detail.component';
import { RecipeEditComponent } from './recipe-edit/recipe-edit.component';
import { RecipeItemComponent } from './recipe-list/recipe-item/recipe-item.component';
import { RecipeListComponent } from './recipe-list/recipe-list.component';
import { RecipeSelectDetailComponent } from './recipe-select-detail.component.ts/recipe-select-detail.component';

/*Recipebook Feature Module*/

@NgModule({
  declarations: [
    RecipeBookComponent,
    RecipeItemComponent,
    RecipeListComponent,
    RecipeEditComponent,
    RecipeDetailComponent,
    RecipeSelectDetailComponent,
  ],
  imports: [RouterModule, RecipeBookRoutingModule, SharedModule],
  // exports: [
  //   RecipeBookComponent,
  //   RecipeItemComponent,
  //   RecipeListComponent,
  //   RecipeEditComponent,
  // ],
})
export class RecipeBookModule {}
