import {Component, OnDestroy, OnInit} from '@angular/core';
import {PeopleService} from './people.service';
import {Observable, Subscription} from 'rxjs';
import {PersonModel} from '../shared/model/person.model';

@Component({
  selector: 'app-http',
  templateUrl: './http.component.html',
  styleUrls: ['./http.component.css']
})

// in memory db

export class HttpComponent implements OnInit, OnDestroy {
  modelPeople: PersonModel[] = [];

  // TODO ibn : will this work? - I  potentially subscripe multiple times and overwrite the variable, but unsubscribes once
  private postsub: Subscription;
  private getsub: Subscription;

  constructor(private peopleService: PeopleService) {
  }

  ngOnInit() {
  }

  ngOnDestroy(): void {
    // this is NOT the way to do it
    if (this.getsub !== undefined) {
      this.postsub.unsubscribe();
    }
    if (this.getsub !== undefined) {
      this.getsub.unsubscribe();
    }
  }

  onAddPerson(nameArg: string) {
    let obs: Observable<PersonModel>;
    obs = this.peopleService.savePerson({id: null, name: nameArg, age: '40', gender: 'female'});
    obs.subscribe(
      (response) => {
        console.log('in addperson');
        console.log(response);
        this.onGetPeople();
      },
      (error) => {
        console.log(error);
        this.modelPeople = [];
      }
    );
  }

  onGetPeople() {
    let obs: Observable<PersonModel[]>;
    obs = this.peopleService.getPeople();
    obs.subscribe(
      (response) => {
        this.modelPeople = response;
      },
      (error) => {
        console.log(error);
        this.modelPeople = [];
      }
    );
  }
}
