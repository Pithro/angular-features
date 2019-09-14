import { Component, OnInit } from '@angular/core';
import { Comp } from '../comp.component';

@Component({
  selector: 'app-comp1',
  templateUrl: './comp1.component.html',
  styleUrls: ['./comp1.component.css']
})
export class Comp1Component implements OnInit, Comp {
  index: number = 0;

  constructor() { }

  ngOnInit() {
  }
}
