import {Component, OnDestroy, OnInit} from '@angular/core';
import {ServiceAsCommunicatorService} from '../../shared/service-as-communicator.service';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-child-service2',
  templateUrl: './child-service2.component.html',
  styleUrls: ['./child-service2.component.css']
})
export class ChildService2Component implements OnInit, OnDestroy {
  private text = '';
  private sub: Subscription;

  constructor(private comService: ServiceAsCommunicatorService) { }

  ngOnInit() {
    console.log('ChildService2Component.ngOnInit');
    this.sub = this.comService.getEmitter().subscribe((message: any) => {
      this.text = message;
    });
  }

  ngOnDestroy(): void {
    console.log('ChildService2Component.ngOnDestroy');
    this.sub.unsubscribe();
  }
}
