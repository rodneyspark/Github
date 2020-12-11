import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appOnHover]'
})
export class OnHoverDirective {

  constructor(private elem: ElementRef, private renderer: Renderer2) {
  }
  setColor(color: string) {
    this.renderer.setStyle(
      this.elem.nativeElement, 'backgroundColor', color
    );
  }

  @HostListener('mouseover')
  onMouseOver() {
    this.setColor('yellow')
  }

  @HostListener('mouseout')
  onMouseOut() {
    this.setColor('grey')
  }


}
