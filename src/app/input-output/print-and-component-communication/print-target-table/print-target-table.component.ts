import {ApplicationRef, Component, OnInit} from '@angular/core';
import {IPrintDelegate, PrintService, TableData} from '../print.service';

@Component({
  selector: 'app-print-target-table',
  templateUrl: './print-target-table.component.html',
  styleUrls: ['./print-target-table.component.css']
})
export class PrintTargetTableComponent implements OnInit, IPrintDelegate {
  sourceData: TableData = new TableData();

  constructor(public printService: PrintService, private appRef: ApplicationRef) {
  }

  ngOnInit(): void {
    this.printService.registerPrintDelegate(this);
  }

  setTableData(tableData: TableData): void {
    this.sourceData = tableData;

    this.appRef.tick(); // force update before printing
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
        <body onload="window.print();window.close()">${printContents}</body>
      </html>
    `);
    popupWin.document.close();
    // <body>${printContents}</body>
  }
}
