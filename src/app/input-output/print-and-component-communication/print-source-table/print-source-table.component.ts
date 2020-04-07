import {Component, OnInit} from '@angular/core';
import {DataColumn, HeaderColumn, IPrintDataSupplierDelegate, PrintService, TableData} from '../print.service';

@Component({
  selector: 'app-print-source-table',
  templateUrl: './print-source-table.component.html',
  styleUrls: ['./print-source-table.component.css']
})
export class PrintSourceTableComponent implements OnInit, IPrintDataSupplierDelegate {
  value: Date;
  display = false;
  // original table
  tableData = new TableData();
  // the table to print
  selectedTableData: TableData = new TableData();

  constructor(public printService: PrintService) {
  }

  ngOnInit(): void {
    this.printService.registerPrintDataDelegate(this);

    // initial table
    this.tableData.caption = 'Table title';
    this.tableData.columnHeaders = [{id: '1', header: 'Header 1'}, {id: '2', header: 'Header 2'}, {id: '3', header: 'Header 3'}];
    this.tableData.rows = [
      // heading1, heading2, heading3
      [{id: '1', data: 'r1c1'}, {id: '2', data: 'r1c2'}, {id: '3', data: 'r1c3'}],
      [{id: '1', data: 'r2c1'}, {id: '2', data: 'r2c2'}, {id: '3', data: 'r2c3'}],
      [{id: '1', data: 'r3c1'}, {id: '2', data: 'r3c2'}, {id: '3', data: 'r3c3'}],
    ];
  }

  startPrintProcess(): void {
    console.log('in PrintSourceTableComponent.getTableData');
    this.display = true;
  }

  onDialogClose(selectedCols: HeaderColumn[]) {
    this.display = false;

    if (selectedCols != null && selectedCols.length > 0) {
      this.selectedTableData.columnHeaders = selectedCols;
      this.selectedTableData.rows = new Array<Array<DataColumn>>();

      // find the matching rows to the id's selected in the dialog
      for (const orgRow of this.tableData.rows) {
        const newRow: Array<DataColumn> = new Array<DataColumn>();
        this.selectedTableData.rows.push(newRow);

        for (const orgCol of orgRow) {
          for (const colHeader of this.selectedTableData.columnHeaders) {
            if (colHeader.id === orgCol.id) {
              const newColumn: DataColumn = new DataColumn();
              newColumn.id = orgCol.id;
              newColumn.data = orgCol.data;
              newRow.push(newColumn);
            }
          }
        }
      }

      this.printService.print(this.selectedTableData);
    }
  }
}
