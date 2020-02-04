import { Component, OnInit } from '@angular/core';
import { ConnectorDirective } from '../container/connector.directive';

@Component({
  selector: 'app-increment-decrement',
  templateUrl: './increment-decrement.component.html',
  styleUrls: ['./increment-decrement.component.css']
})
export class IncrementDecrementComponent {

  constructor(private connector: ConnectorDirective) { }

  updateGap(val) {
    if (val) this.connector.updatedGap.emit(true);
    else this.connector.updatedGap.emit(false);
  }

  updateRows(val) {
    if (val) this.connector.updateRows.emit(true);
    else this.connector.updateRows.emit(false);
  }

}
