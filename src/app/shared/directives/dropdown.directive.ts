import {
  Directive,
  ElementRef,
  HostBinding,
  HostListener,
} from '@angular/core';

@Directive({
  selector: '[appDropdown]', //syntax to specify that this is a directive
})
export class DropdownDirective {
  @HostBinding('class.open') isOpen = false;
  constructor(private elRef: ElementRef) {}

  // @HostListener('click') toggleOpen() { //commented code keeps the dropdown open
  @HostListener('document:click', ['$event']) toggleOpen(event: Event) {
    // this.isOpen = !this.isOpen;
    this.isOpen = this.elRef.nativeElement.contains(event.target)
      ? !this.isOpen
      : false;
  }
}
