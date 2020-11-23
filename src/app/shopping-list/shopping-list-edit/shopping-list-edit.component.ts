import {
  Component,
  OnInit,
  Output,
  EventEmitter,
  Input,
  OnChanges,
  ViewChild,
} from '@angular/core';
import { NgForm } from '@angular/forms';

import { Ingredient } from '../../shared/ingredient.model';
import { ShoppingService } from '../shopping.service';

@Component({
  selector: 'app-shopping-list-edit',
  templateUrl: 'shopping-list-edit.component.html',
  styleUrls: ['shopping-list-edit.component.css'],
})
export class ShoppingListEditComponent implements OnInit, OnChanges {
  @Output() ingOut = new EventEmitter<Ingredient>();
  @Input() selectedItem?: Ingredient;
  @ViewChild('slForm', { static: false }) form?: NgForm;
  btnAU?: string;

  constructor(private slService: ShoppingService) {}
  ngOnInit() {
    this.btnAU = 'Add';
  }
  ngOnChanges() {
    this.form?.setValue({
      name: this.selectedItem?.name,
      amount: this.selectedItem?.amount,
    });
    this.btnAU = 'Update';
  }

  addHandler(ngForm: NgForm) {
    let { name, amount } = ngForm.form.value;
    // const amount = +this.amountInput.nativeElement.value;
    // const name = this.nameInput.nativeElement.value;
    name = name
      .trim()
      .replace(/  +/g, ' ') //regex to repalace 2 ormore empty spaces with one
      .split(' ')
      .map((n: string) => n[0].toUpperCase() + n.slice(1))
      .join(' ');
    const ingredient = new Ingredient(name, amount);
    this.ingOut.emit(ingredient);
    this.btnAU = 'Add';
    this.onClear(ngForm);
  }

  onClear(ngForm: NgForm) {
    ngForm.reset();
    this.btnAU = 'Add';
  }

  deleteHandler(ngForm: NgForm) {
    let { name, amount } = ngForm.form.value;
    // const amount = +this.amountInput.nativeElement.value;
    // const name = this.nameInput.nativeElement.value;
    name = name
      .trim()
      .replace(/  +/g, ' ') //regex to repalace 2 ormore empty spaces with one
      .split(' ')
      .map((n: string) => n[0].toUpperCase() + n.slice(1))
      .join(' ');
    const ingredient = new Ingredient(name, amount);
    this.slService.getSelectedIngredient.next(ingredient);
    this.btnAU = 'Add';
    this.onClear(ngForm);
  }
}
