import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-interpolation',
  templateUrl: './interpolation.component.html',
  styleUrls: ['./interpolation.component.css']
})
export class InterpolationComponent implements OnInit {
  showIt: string = '';

  constructor() { }

  ngOnInit() {
  }

  private onTextInput(event: any) {
    this.showIt = event.target.value;
  }

}
