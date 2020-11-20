import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appDropdown]', //syntax to specify that this is a directive
})
export class DropdownDirective {
  @HostBinding('class.open') isOpen = false;
  constructor() {}

  @HostListener('click') toggleOpen() {
    this.isOpen = !this.isOpen;
  }
}
