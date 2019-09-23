import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  private persons = [
    {id: 11, name: 'Person 1', age: '21', gender: 'male'},
    {id: 12, name: 'Person 2', age: '22', gender: 'female'},
    {id: 13, name: 'Person 3', age: '23', gender: 'female'},
  ];

  createDb() {
    return {persons: this.persons};
  }

  // Overrides the genId method to ensure that a person always has an id.
  // If the persons array is empty,
  // the method below returns the initial number (11).
  // if the persons array is not empty, the method below returns the highest
  // person id + 1.
  /*genId(persons: PersonModel[]): number {
    // use of spread operator
    return persons.length > 0 ? Math.max(...persons.map(hero => hero.id)) + 1 : 11;
  }*/
}
