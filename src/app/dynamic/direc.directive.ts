import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[host-element]'
})
export class DirecDirective {

  constructor(public viewContainerRef: ViewContainerRef) { }

}
