import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: 'img'
})
export class ImgLazyLoaderDirective {

  constructor({ nativeElement }: ElementRef<HTMLImageElement>) {
    const supports = 'loading' in HTMLImageElement.prototype;

    if (supports) {
      nativeElement.setAttribute('loading', 'lazy');
    }
  }

}
