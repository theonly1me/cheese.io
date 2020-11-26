import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './auth/auth.component';

const appRoutes: Routes = [
  {
    path: '',
    redirectTo: '/auth',
    pathMatch: 'full',
  },
  {
    path: 'auth',
    component: AuthComponent,
  },
  {
    path: 'recipebook',
    loadChildren: () =>
      //Lazy Loading
      import('./recipe-book/recipe-book.module').then(m => m.RecipeBookModule),
  },
  {
    path: 'shoppinglist',
    loadChildren: () =>
      //Lazy Loading
      import('./shopping-list/shopping-list.module').then(
        m => m.ShoppingListModule
      ),
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes, { preloadingStrategy: PreloadAllModules }), //lazy loading preload
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
