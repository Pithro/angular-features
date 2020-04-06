import {Injectable} from '@angular/core';

export class TableData {
  caption: string;
  column_headings: string[] = [];
  rows: Array<Array<string>>;
}

export interface IPrintDataDelegate {
  getTableData(): TableData;
}

export interface IPrintDelegate {
  setTableData(tableData: TableData): void;
}

@Injectable({
  providedIn: 'root'
})
export class PrintService {
  private printDataDelegate: IPrintDataDelegate;
  private printDelegate: IPrintDelegate;
  private tableData: TableData;

  constructor() { }

  public registerPrintDataDelegate(delegate: IPrintDataDelegate) {
    this.printDataDelegate = delegate;
  }

  public registerPrintDelegate(delegate: IPrintDelegate) {
    this.printDelegate = delegate;
  }

  public startPrintProcess(): void {
    console.log('in startPrintProcess');
    // get data from the source
    this.tableData = this.printDataDelegate.getTableData();
    this.printDelegate.setTableData(this.tableData);

    return;
  }
}
