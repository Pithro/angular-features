import { Component, OnInit } from '@angular/core';
import {PrintService} from '../print.service';
import {DialogModule} from 'primeng/dialog';

@Component({
  selector: 'app-print',
  templateUrl: './print.component.html',
  styleUrls: ['./print.component.css']
})
export class PrintComponent implements OnInit {

  constructor(public printService: PrintService) { }

  display: boolean = false;

  ngOnInit(): void {
  }

  handleClick($event: any) {
    console.log('Print button clicked');
    // start med lokal print og deleger senere
    // this.print();
    // this.display = true;
    window.print(); // It works !!
  }

  /*print(): void {
    // TODO ibn : lad det være for nu og få kommunikationen op at køre sammen med popup valg af kolonner
    let printContents, popupWin;
    printContents = document.getElementById('print-section').innerHTML;
    popupWin = window.open('', '_blank', 'top=0,left=0,height=0,width=0');
    // popupWin = window.open('', '_blank', 'top=0,left=0,height=100%,width=auto');
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
