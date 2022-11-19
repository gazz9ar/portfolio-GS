import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: 'appScrollAnimation'
})
export class ScrollAnimationDirective {

  @HostListener('onscrolldown') onScrollDown() {
    this.addAnimationClass('floatingIcon');
  }

  constructor(
    private renderer: Renderer2, 
    private el: ElementRef) { }

  private addAnimationClass(classToAdd: string) {   
    this.renderer.addClass(this.el.nativeElement, classToAdd);
  }

}
