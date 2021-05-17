import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appUppercase]',
  host: {'(input)': '$event'}
})
export class UppercaseDirective {

  private _lastValue: string;

  constructor(private _el: ElementRef) {}

  @HostListener('input', ['$event']) onInput(event) {
    const start = event.target.selectionStart;
    const end = event.target.selectionEnd;
    event.target.value = event.target.value.toUpperCase();
    event.target.setSelectionRange(start, end);
    event.preventDefault();

    if (!this._lastValue || (this._lastValue && event.target.value.length > 0 && this._lastValue !== event.target.value)) {
      this._lastValue = this._el.nativeElement.value = event.target.value;
      const evt = document.createEvent('HTMLEvents');
      evt.initEvent('input', false, true);
      event.target.dispatchEvent(evt);
    }
  }
}
