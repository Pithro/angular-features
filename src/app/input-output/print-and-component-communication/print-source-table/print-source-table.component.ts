import {Component, OnDestroy, OnInit} from '@angular/core';
import {IPrintDataDelegate, PrintService, TableData} from '../print.service';
import {newArray} from '@angular/compiler/src/util';

@Component({
  selector: 'app-print-source-table',
  templateUrl: './print-source-table.component.html',
  styleUrls: ['./print-source-table.component.css']
})
export class PrintSourceTableComponent implements OnInit, IPrintDataDelegate {
  value: Date;
  tableData = new TableData();
  display = false;

  constructor(public printService: PrintService) {
  }

  ngOnInit(): void {
    this.printService.registerPrintDataDelegate(this);

    this.tableData.caption = 'Table title';
    this.tableData.column_headings = ['Header 1', 'Header 2', 'Header 3'];
    this.tableData.rows = [
      ['r1c1', 'r1c2', 'r1c3'],
      ['r2c1', 'r2c2', 'r2c3'],
      ['r3c1', 'r3c2', 'r3c3'],
    ];
  }

  getTableData(): TableData {
    // TODO ibn : this should trigger popup med ok/annuller knapper
    // måske skal print servicen lytte på svar fra den her komponent før taget bliver lavet
    this.display = true;

    /*const o: TableData = new TableData();
    o.caption = 'This is the caption';

    o.heading.push('HEAD 1');
    o.heading.push('HEAD 2');

    o.row = new Array();

    let r: string[] = [];
    r.push('col 1');
    r.push('col 2');

    o.row.push(r);

    r =  [];
    r.push('col 1');
    r.push('col 2');

    o.row.push(r);

    return o;*/

    return this.tableData;
  }
}
