import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-first-prime',
  templateUrl: './first-prime.component.html',
  styleUrls: ['./first-prime.component.css']
})
export class FirstPrimeComponent implements OnInit {
  items: any;

  constructor() { }

  ngOnInit() {
  }

  save() {
    console.log('clicked');
  }
}
