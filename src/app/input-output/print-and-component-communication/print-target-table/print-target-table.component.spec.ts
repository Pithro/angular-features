import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrintTargetTableComponent } from './print-target-table.component';

describe('PrintTargetTableComponent', () => {
  let component: PrintTargetTableComponent;
  let fixture: ComponentFixture<PrintTargetTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrintTargetTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrintTargetTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
