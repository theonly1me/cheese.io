import { Component } from '@angular/core';

@Component({
  selector: 'app-load-spinner',
  template: `<div class="lds-ellipsis">
    <div></div>
    <div></div>
    <div></div>
    <div></div>
  </div>`,
  styleUrls: ['./loading-spinner.component.css'],
})
export class LoadingSpinnerComponent {}
