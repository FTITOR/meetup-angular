import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appUppercase]',
  host: {'(input)': '$event'}
})
export class UppercaseDirective {

  constructor(private el: ElementRef) {}

  @HostListener('input', ['$event']) onInput(event) {
    const initialValue = this.el.nativeElement.value;
    event.target.value = event.target.value.toUpperCase();

    if (initialValue !== this.el.nativeElement.value) {
      event.stopPropagation();
    }
  }
}
