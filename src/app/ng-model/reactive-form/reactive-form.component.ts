import {Component, OnInit} from '@angular/core';
import {FormArray, FormControl, FormGroup, Validators} from '@angular/forms';
import { phoneNumberValidator } from './phone-validator';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {
  myFormGroup: FormGroup;

  constructor() {
  }

  ngOnInit() {
    this.myFormGroup = new FormGroup({
      userid: new FormControl(null, [Validators.required, Validators.email]),
      phonenumber: new FormControl(null, [Validators.required, phoneNumberValidator]),
      userData: new FormGroup({
        fg1: new FormControl(null, Validators.required),
        fg2: new FormControl(null)
      }),
      newControl: new FormArray([])
    });
  }

  onSubmit() {
    console.log(this.myFormGroup);
  }

  onNewControl() {
    const control = new FormControl(null, Validators.required);
    (this.myFormGroup.get('newControl') as FormArray).push(control);
  }

  get phonenumber() {
    return this.myFormGroup.get('phonenumber');
  }

  getControls() {
    return (this.myFormGroup.get('newControl') as FormArray).controls;
  }
}
