import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appCustomDirectives]'
})
export class CustomDirectivesDirective {
  el:ElementRef;
  constructor(el:ElementRef) {
    this.el = el;
    el.nativeElement.style.backgroundColor = 'yellow';
    el.nativeElement.style.color = 'red';
    el.nativeElement.style.fontSize = '30px';
    el.nativeElement.innerHTML = 'Hello World';
   }
onClicked(){
  this.el.nativeElement.addEventListener('click',()=>{
    this.el.nativeElement.style.backgroundColor = 'yellow';
    this.el.nativeElement.style.color = 'red';
    this.el.nativeElement.style.fontSize = '30px';
    this.el.nativeElement.innerHTML = 'Hello World';
  })
}
// add a new element to a DOM so give a new element to the DO
addNewElementToDom(){
  const newElement = document.createElement('div');
  newElement.style.backgroundColor = 'yellow';
  newElement.style.color = 'red';
  newElement.style.fontSize = '30px';
  newElement.innerHTML = 'Hello World';
  this.el.nativeElement.appendChild(newElement);
}


}
