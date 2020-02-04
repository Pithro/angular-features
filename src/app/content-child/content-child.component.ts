import {Component, ContentChild, Directive, Input} from '@angular/core';

// tslint:disable-next-line:directive-selector
@Directive({selector: 'pane'})
// tslint:disable-next-line:directive-class-suffix
export class Pane {
  @Input() id !: string;
}

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'tab',
  template: `
    <div>pane: {{pane?.id}}</div>
  `
})
// tslint:disable-next-line:component-class-suffix
export class Tab {
  @ContentChild(Pane, {static: false}) pane !: Pane;
}

@Component({
  selector: 'app-example',
  template: `
    <tab>
      <pane id="1" *ngIf="shouldShow"></pane>
      <pane id="2" *ngIf="!shouldShow"></pane>
    </tab>

    <button (click)="toggle()">Toggle</button>
  `,
})
export class ContentChildComponent {
  shouldShow = true;

  toggle() { this.shouldShow = !this.shouldShow; }
}
