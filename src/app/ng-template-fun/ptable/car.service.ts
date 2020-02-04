import { Injectable } from '@angular/core';
import {Car} from './car';

@Injectable({
  providedIn: 'root'
})
export class CarService {

  constructor() { }

  public getCars(): Car[] {
    const cars: Car[] = [
      // two different ways to initialize
      new Car('adc', 123, 'sdfd', 'sss'),
      {vin: 'sss', year: 1234, model: 'Ford', color: 'white'}
    ];

    return cars;
  }
}
