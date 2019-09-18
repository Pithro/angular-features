import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-usepipe',
  templateUrl: './usepipe.component.html',
  styleUrls: ['./usepipe.component.css']
})
export class UsepipeComponent implements OnInit {
  myText: string;

  // async pipe
  myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Async reply');
    }, 2000);
  });

  constructor() {
  }

  ngOnInit() {
  }

  onTextInput(event: any) {
    this.myText = event.target.value;
  }
}
