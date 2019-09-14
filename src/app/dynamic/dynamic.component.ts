import { Component, OnInit, ViewChild, ComponentFactoryResolver } from '@angular/core';
import { Comp } from './comp.component';
import { Comp1Component } from './comp1/comp1.component';
import { Comp2Component } from './comp2/comp2.component';
import { DirecDirective } from './direc.directive';

@Component({
  selector: 'app-dynamic',
  templateUrl: './dynamic.component.html',
  styleUrls: ['./dynamic.component.css']
})
export class DynamicComponent implements OnInit {
  comps = [Comp1Component, Comp2Component];
  private i: number = 0;

  @ViewChild(DirecDirective, {static: true}) adHost: DirecDirective;

  constructor(private componentFactoryResolver: ComponentFactoryResolver) { }

  ngOnInit() {
    this.loadComponent();
  }

  private loadComponent() : void {
    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(this.comps[this.i]);
    const viewContainerRef = this.adHost.viewContainerRef;
    viewContainerRef.clear();

    const componentRef = viewContainerRef.createComponent(componentFactory);
    // componentRef.setIndex(this.i);
    (<Comp>componentRef.instance).index = this.i;
  }

  onNext(): void {
    if(this.i == 0) {
      this.i++;
    } else {
      this.i--;
    }
    this.loadComponent();
  }

}
