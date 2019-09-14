import { Component, OnInit } from '@angular/core';
import { Comp } from '../comp.component';

@Component({
  selector: 'app-comp2',
  templateUrl: './comp2.component.html',
  styleUrls: ['./comp2.component.css']
})
export class Comp2Component implements OnInit, Comp {
  index: number = 0;

  constructor() { }

  ngOnInit() {
  }
}
