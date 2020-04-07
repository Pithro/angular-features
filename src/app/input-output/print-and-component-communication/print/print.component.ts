import {Component, OnInit} from '@angular/core';
import {PrintService} from '../print.service';
import {DialogModule} from 'primeng/dialog';

@Component({
  selector: 'app-print',
  templateUrl: './print.component.html',
  styleUrls: ['./print.component.css']
})
export class PrintComponent implements OnInit {

  constructor(public printService: PrintService) {
  }

  ngOnInit(): void {
  }

  handleClick($event: any) {
    this.printService.startPrintProcess();
  }
}
