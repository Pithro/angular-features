import {Injectable} from '@angular/core';

export class HeaderColumn {
  id: string;
  header: string;
}

export class DataColumn {
  id: string;
  data: string;
}

export class TableData {
  caption: string;
  columnHeaders: HeaderColumn[] = [];
  rows: Array<Array<DataColumn>>;
}

export interface IPrintDataSupplierDelegate {
  startPrintProcess(): void;
}

export interface IPrintDelegate {
  setTableData(tableData: TableData): void;
  print(): void;
}

@Injectable({
  providedIn: 'root'
})
export class PrintService {
  private printDataDelegate: IPrintDataSupplierDelegate;
  private printDelegate: IPrintDelegate;

  constructor() {
  }

  public registerPrintDataDelegate(delegate: IPrintDataSupplierDelegate) {
    this.printDataDelegate = delegate;
  }

  public registerPrintDelegate(delegate: IPrintDelegate) {
    this.printDelegate = delegate;
  }

  public startPrintProcess(): void {
    this.printDataDelegate.startPrintProcess();

    return;
  }

  print(tableData: TableData) {
    this.printDelegate.setTableData(tableData);
    this.printDelegate.print();
  }
}
