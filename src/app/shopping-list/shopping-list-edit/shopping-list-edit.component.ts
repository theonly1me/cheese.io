import {
  Component,
  ViewChild,
  OnInit,
  Output,
  EventEmitter,
} from '@angular/core';
import { Ingredient } from '../../shared/ingredient.model';

@Component({
  selector: 'app-shopping-list-edit',
  templateUrl: 'shopping-list-edit.component.html',
  styleUrls: ['shopping-list-edit.component.css'],
})
export class ShoppingListEditComponent implements OnInit {
  @ViewChild('amountInput') amountInput: any;
  @ViewChild('nameInput') nameInput: any;
  @Output() ingOut = new EventEmitter<Ingredient>();

  constructor() {}
  ngOnInit() {}
  addHandler(e: any) {
    const amount = this.amountInput.nativeElement.value;
    const name = this.nameInput.nativeElement.value;
    const ingredient = new Ingredient(name, amount);
    this.ingOut.emit(ingredient);
  }
}
