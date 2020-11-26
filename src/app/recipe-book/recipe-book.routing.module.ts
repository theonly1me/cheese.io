import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../auth/auth.guard';
import { RecipesResolverService } from '../shared/recipes-resolver.service';
import { RecipeBookComponent } from './recipe-book.component';
import { RecipeDetailComponent } from './recipe-detail/recipe-detail.component';
import { RecipeEditComponent } from './recipe-edit/recipe-edit.component';
import { RecipeSelectDetailComponent } from './recipe-select-detail.component.ts/recipe-select-detail.component';

const routes: Routes = [
  {
    path: '',
    component: RecipeBookComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: '',
        component: RecipeSelectDetailComponent,
      },
      {
        path: 'new', //This should come befor the below path (:id) because routesa are parsed from top
        component: RecipeEditComponent,
      },
      {
        path: ':id', //:id
        component: RecipeDetailComponent,
        resolve: [RecipesResolverService],
      },
      {
        path: ':id/edit',
        component: RecipeEditComponent,
        resolve: [RecipesResolverService],
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RecipeBookRoutingModule {}
