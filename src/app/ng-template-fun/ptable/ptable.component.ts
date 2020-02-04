import { Component, OnInit } from '@angular/core';
import {Car} from './car';
import {CarService} from './car.service';

@Component({
  selector: 'app-ptable',
  templateUrl: './ptable.component.html',
  styleUrls: ['./ptable.component.css']
})
export class PtableComponent implements OnInit {
  private cars: Car[];
  private cols: any[];
  private foot: any[];
  private fem = '500px';

  constructor(private carService: CarService) {
  }

  ngOnInit() {
    this.cars = this.carService.getCars();
    console.log(this.cars[0]);

    this.cols = [
      { field: 'model', header: 'Model', foot: 'foot 1', w: '500' },
      { field: 'color', header: 'Color', foot: 'foot 2', w: '500' }
    ];

    this.foot = [
      { field: 'modelx', header: 'Whaaat' },
      { field: 'colorx', header: 'More whaat' }
    ];
  }
}

