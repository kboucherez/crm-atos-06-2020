import { Directive, HostBinding, Input, OnChanges } from '@angular/core';
@Directive({
  selector: '[appState]'
})
export class StateDirective implements OnChanges {
  @Input() appState: string;
  @HostBinding('class') classProperty: string;
  constructor() {
  }
  ngOnChanges() {
    this.classProperty = this.formatClass(this.appState);
  }
  private formatClass(state: string): string {
    return `state-${state.toLowerCase()}`;
  }
}
// si appState vaut CANCELED => state-canceled
// si appState vaut OPTION => state-option
// si appState vaut CONFIRMED => state-confirmed
// Binder la propriété 'class' du host element 'td' que cet objet control
