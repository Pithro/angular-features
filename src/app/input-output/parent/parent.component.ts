import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {
  toChild2 = '';

  constructor() { }

  ngOnInit() {
  }

  onOut(arg: string) {
    this.toChild2 = arg;
    // TODO ibn: and now with a service
  }
}
