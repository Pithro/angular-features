import { Component, OnInit, Input, HostBinding } from '@angular/core';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

  @Input() id;

  constructor() { }

  ngOnInit() {
    // just some fun with console.log
    const warriors = [
      { name: 'Son Goku', powerLevel: 32000 },
      { name: 'Vegetar', powerLevel: 18000 },
      { name: 'Piccolo', powerLevel:  3500 },
      { name: 'Krillin', powerLevel: 1770 },
      { name: 'Yamcha', powerLevel: 1000 },
    ];

    console.table(warriors);
  }
}
