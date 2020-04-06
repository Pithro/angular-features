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
    console.log('Print button clicked');
    this.printService.startPrintProcess();

    // TODO ibn : afvent afslutning af processen før der faktisk printes - skal nok være asynkront
    this.print();
  }

  print(): void {
    const head = document.getElementsByTagName('head')[0].innerHTML;
    const printContents = document.getElementById('print-section').innerHTML;
    const popupWin = window.open('', '_blank', '');
    // popupWin = window.open('', '_blank', 'top=0,left=0,height=100%,width=auto');
    popupWin.document.write(`
      <html>
        <head>
            ${head}
        </head>
        <body>${printContents}</body>
      </html>
    `);
    popupWin.document.close();
  }
  // TODO ibn : ind igen, når færdig
  // <body onload="window.print();window.close()">${printContents}</body>
}
