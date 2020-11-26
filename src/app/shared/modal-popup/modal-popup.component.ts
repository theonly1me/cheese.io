import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-modal-popup',
  templateUrl: 'modal-popup.component.html',
  styleUrls: ['modal-popup.component.css'],
})
export class ModalPopupComponent {
  @Input() message?: string;
  @Output() closeModal? = new EventEmitter<void>();

  onCloseModal() {
    this.closeModal?.emit();
  }
}
