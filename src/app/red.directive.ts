import {Directive, ElementRef, HostListener, Renderer2} from '@angular/core';

@Directive({
  selector: '[appRed]'
})
export class RedDirective {

  constructor(private element: ElementRef, renderer2: Renderer2) {
    // console.log(element.nativeElement);
    // element.nativeElement.style.background = 'red';
    // renderer2.setStyle(element.nativeElement, 'background', 'red');
  }
  @HostListener('mouseover')
  change(): void {
    this.element.nativeElement.style.background = 'red';
  }

}
