import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './auth/auth.component';
import { AuthGuard } from './auth/auth.guard';
import { RecipeBookComponent } from './recipe-book/recipe-book.component';
import { RecipeDetailComponent } from './recipe-book/recipe-detail/recipe-detail.component';
import { RecipeEditComponent } from './recipe-book/recipe-edit/recipe-edit.component';
import { RecipeSelectDetailComponent } from './recipe-book/recipe-select-detail.component.ts/recipe-select-detail.component';
import { RecipesResolverService } from './shared/recipes-resolver.service';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';

const appRoutes: Routes = [
  {
    path: '',
    redirectTo: '/auth',
    pathMatch: 'full',
  },
  {
    path: 'recipebook',
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
  {
    path: 'shoppinglist',
    component: ShoppingListComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'auth',
    component: AuthComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
