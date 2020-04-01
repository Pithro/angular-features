import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-property-binding',
  templateUrl: './property-binding.component.html',
  styleUrls: ['./property-binding.component.css']
})
export class PropertyBindingComponent implements OnInit {
  myStyle = 'btn-primary';
  isDisabled = true;
  bgColor: string;
  cssClass: string = '';

  constructor() { }

  ngOnInit() {
  }

  onClick() {
    this.isDisabled = !this.isDisabled;
  }

  onClickChangeClass() {
    this.bgColor = 'bg-danger';
  }

  onClickAddClass() {
    this.cssClass = 'text-right';
  }
}
