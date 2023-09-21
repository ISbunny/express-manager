import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appCustomDirectives]'
})
export class CustomDirectivesDirective {

  constructor(el:ElementRef) {
    el.nativeElement.style.backgroundColor = 'yellow';
   }

}
