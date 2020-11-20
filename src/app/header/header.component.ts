import { Component, Output, OnInit, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  @Output('navClick') selectedComponent = new EventEmitter<string>();

  constructor() {}

  ngOnInit() {}

  navHandler(event: any): void {
    const value = event?.target?.textContent;
    this.selectedComponent.emit(value);
  }
}
