import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appColored]'
})
export class ColoredDirective {

  constructor(private el: ElementRef) {
    el.nativeElement.style.color = 'green';
  }


}
