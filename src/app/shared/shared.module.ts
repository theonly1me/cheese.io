import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DropdownDirective } from './directives/dropdown.directive';
import { LoadingSpinnerComponent } from './loading-spinner/loading-spinner.component';
import { ModalPopupComponent } from './modal-popup/modal-popup.component';

@NgModule({
  declarations: [
    DropdownDirective,
    LoadingSpinnerComponent,
    ModalPopupComponent,
  ],
  imports: [CommonModule],
  exports: [
    DropdownDirective,
    LoadingSpinnerComponent,
    ModalPopupComponent,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
  ],
})
export class SharedModule {}
