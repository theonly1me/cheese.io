import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../auth/auth.guard';
import { SharedModule } from '../shared/shared.module';
import { ShoppingListEditComponent } from './shopping-list-edit/shopping-list-edit.component';
import { ShoppingListComponent } from './shopping-list.component';

/* Shopping List Feature Module */

const routes: Routes = [
  {
    path: '',
    component: ShoppingListComponent,
    canActivate: [AuthGuard],
  },
];

@NgModule({
  declarations: [ShoppingListComponent, ShoppingListEditComponent],
  imports: [RouterModule.forChild(routes), SharedModule],
  exports: [RouterModule],
})
export class ShoppingListModule {}
