export class Car {
  vin: string;
  year: number;
  model: string;
  color: string;

  constructor(vin: string, year: number, model: string, color: string) {
    this.vin = vin;
    this.year = year;
    this.model = model;
    this.color = color;
  }

  toString = () => {
    console.log('my own representation of Object.toString()');
  }
}
