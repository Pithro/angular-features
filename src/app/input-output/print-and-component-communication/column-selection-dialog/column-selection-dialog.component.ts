import {Component, EventEmitter, HostListener, Input, OnInit, Output, ViewChild} from '@angular/core';
import {Dialog} from 'primeng';
import {HeaderColumn} from '../print.service';

@Component({
  selector: 'app-column-selection-dialog',
  templateUrl: './column-selection-dialog.component.html',
  styleUrls: ['./column-selection-dialog.component.css']
})
export class ColumnSelectionDialogComponent implements OnInit {
  @Input() display = false;
  @Input() columns: HeaderColumn[];
  @Output() closed = new EventEmitter<HeaderColumn[]>();
  // enhance Dialog with keyboard events
  @ViewChild(Dialog, { static: false }) dialog: Dialog;
  selectedIds: string[] = [];

  constructor() { }

  ngOnInit(): void {
  }

  onShow() {
    this.selectedIds = [];
    // all checked by default
    this.columns.forEach(value => {
      this.selectedIds.push(value.id);
    });
  }

  onSaveClicked() {
    this.closed.emit(this.columns.filter(value => {
      if (this.selectedIds.includes(value.id)) {
        return value;
      }
    }));
  }

  onCancelClicked() {
    this.closed.emit(null);
  }

  @HostListener('window:keyup', ['$event'])
  keyEvent(event: KeyboardEvent) {
    if (this.dialog.visible) {
      if (event.key != null && event.key.toLowerCase() === 'escape') {
        this.onCancelClicked();
      }
      if (event.key != null && event.key.toLowerCase() === 'enter') {
        this.onSaveClicked();
      }
    }
  }
}
