import { Directive, HostBinding, HostListener, Output } from '@angular/core';

@Directive({
  selector: '.high-light'
})
export class HostColorDirective {

  @HostBinding('style.color') colorKey = 'red';

  @HostListener('mouseenter') onEnter() {
    this.colorKey = 'green';
  }

  @HostListener('mouseleave') onLeave() {
    this.colorKey = 'darkred';
  }

}