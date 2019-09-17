import { Component, OnInit } from '@angular/core';
import {ServiceAsCommunicatorService} from '../../shared/service-as-communicator.service';

@Component({
  selector: 'app-child-service1',
  templateUrl: './child-service1.component.html',
  styleUrls: ['./child-service1.component.css']
})
export class ChildService1Component implements OnInit {

  constructor(private comService: ServiceAsCommunicatorService) { }

  ngOnInit() {
  }

  onTextInput(event: any) {
    this.comService.setText(event.target.value);
  }
}
