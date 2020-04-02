import {AfterViewInit, Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-print-popup',
  templateUrl: './print-popup.component.html',
  styleUrls: ['./print-popup.component.css']
})
export class PrintPopupComponent implements OnInit, AfterViewInit {
  show = true;

  constructor() { }

  ngOnInit(): void {
    console.log('in popup');
    // window.onclose = () => {
    //   // set warning message
    //   console.log('closing window');
    //   // this.show = false;
    // };
  }

  ngAfterViewInit() {
    window.print();
    // this.show = false;
  }

  close_me() {
    //this.show = false;
    console.log('In closeme');
  }
}
