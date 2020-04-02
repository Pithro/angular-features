import { Component, OnInit } from '@angular/core';
import {DialogModule} from 'primeng/dialog';

@Component({
  selector: 'app-print-target-table',
  templateUrl: './print-target-table.component.html',
  styleUrls: ['./print-target-table.component.css']
})
export class PrintTargetTableComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  /*print(): void {
    // TODO ibn : lad det være for nu og få kommunikationen op at køre sammen med popup valg af kolonner
    let printContents, popupWin;
    printContents = document.getElementById('print-section').innerHTML;
    // popupWin = window.open('', '_blank', 'top=0,left=0,height=0,width=0');
    popupWin = window.open('', '_blank', 'top=0,left=0,height=100%,width=auto');
    popupWin.document.open();
    popupWin.document.write(`
      <html>
        <head>
          <title>Print tab</title>
          <style>
          //........Customized style.......
          </style>
        </head>
    <body onload="window.print();window.close()">${printContents}</body>
      </html>`
    );
    popupWin.document.close();
  }*/

}
