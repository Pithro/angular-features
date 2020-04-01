import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-ng-model',
  templateUrl: './ng-model.component.html',
  styleUrls: ['./ng-model.component.css']
})
export class NgModelComponent implements OnInit {
  // alternative approach
  @ViewChild('myformref') myformref: NgForm;
  defaultValg = 'valg1';
  theEnteredText: string;

  animals = [
    {specie: 'dog', selected: false},
    {specie: 'cat', selected: false},
    {specie: 'snake', selected: true}
  ];
  radioSelected = '';

  constructor() {
  }

  ngOnInit() {
    this.animals.forEach((o) => {
      if (o.selected) {
        this.radioSelected = o.specie;
      }
    });
  }

  onSubmit(form: NgForm) {
    // all kinds of checks is available in form object
    console.log(`isDIRTY: ${form.dirty}`);
    console.log(`isValid: ${form.valid}`);
    console.log(form);

    // the alternative approach
    console.log('From viewchild directive');
    console.log(this.myformref);
  }

  resetForm(myformref: NgForm) {
    const formStruct = {
      group1: {
        someText: 'initialized',
        someEmail: 'email too'
      }
    };

    myformref.reset(formStruct);
  }
}
