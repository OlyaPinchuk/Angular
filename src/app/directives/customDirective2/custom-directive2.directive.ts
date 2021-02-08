import {Directive, ElementRef, HostListener} from '@angular/core';

@Directive({
  selector: '[appCustomDirective2]'
})
export class CustomDirective2Directive {

  constructor(private element: ElementRef) {
    element.nativeElement.style.border = '2px solid red';
    element.nativeElement.style.borderRadius = '4px';
    element.nativeElement.style.textAlign = 'center';
  }

  @HostListener('click')
  change(): void {
    if (this.element.nativeElement.style.color === 'white'){
      this.element.nativeElement.style.color = 'black';
      this.element.nativeElement.style.background = 'white';
    } else {
      this.element.nativeElement.style.color = 'white';
      this.element.nativeElement.style.background = 'black';
    }
  }

}
