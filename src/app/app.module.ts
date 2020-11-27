import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RecipeBookRoutingModule } from './recipe-book/recipe-book.routing.module';
import { SharedModule } from './shared/shared.module';
import { StoreModule } from '@ngrx/store';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { AppRoutingModule } from './app-routing.module';
import { AuthComponent } from './auth/auth.component';
import { AuthInterceptorService } from './auth/auth-interceptor.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { shoppingListReducer } from './shopping-list/shopping-list-store/shopping-list.reducer';

@NgModule({
  declarations: [AppComponent, HeaderComponent, AuthComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    // RecipeBookModule, Removed this eager loading for lazy loading
    RecipeBookRoutingModule,
    // ShoppingListModule, Removed this eager loading for lazy loading
    SharedModule,
    //forRoot doesn't exist on StoreModule instead used
    StoreModule.forRoot({ shoppingList: shoppingListReducer }),
    BrowserAnimationsModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptorService,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
