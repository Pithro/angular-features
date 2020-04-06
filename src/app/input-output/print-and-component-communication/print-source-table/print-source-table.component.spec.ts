import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrintSourceTableComponent } from './print-source-table.component';

describe('PrintSourceTableComponent', () => {
  let component: PrintSourceTableComponent;
  let fixture: ComponentFixture<PrintSourceTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrintSourceTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrintSourceTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
