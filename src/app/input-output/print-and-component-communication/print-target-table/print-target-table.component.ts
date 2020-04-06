import {ApplicationRef, Component, OnInit} from '@angular/core';
import {IPrintDelegate, PrintService, TableData} from '../print.service';
import {TableService} from 'primeng';

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
    console.log('In PrintTargetTableComponent.ngOnInit');
    this.printService.registerPrintDelegate(this);
  }

  setTableData(tableData: TableData): void {
    console.log('In PrintTargetTableComponent.setTableData');

    this.sourceData = tableData;

    this.appRef.tick(); // force update before printing
  }
}
