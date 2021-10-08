import {Directive, ElementRef, Input, Renderer2} from '@angular/core';

@Directive({
  selector: '[appTableDirective]'
})
export class TableDirectiveDirective {

  @Input("appTableDirective")
  set indexOfElement(value: number) {

    if (value < 1) {
      this._renderer.setStyle(this._el.nativeElement, "color", "grey");
    }
    else if(value > 2){
      this._renderer.setStyle(this._el.nativeElement, "color", "yellow");
    }
    else {
      this._renderer.setStyle(this._el.nativeElement, "color", "green");
    }
  }

  constructor(private _el: ElementRef, private _renderer: Renderer2) {
  }

}
