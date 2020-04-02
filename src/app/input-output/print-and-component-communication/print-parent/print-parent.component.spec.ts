import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrintParentComponent } from './print-parent.component';

describe('PrintParentComponent', () => {
  let component: PrintParentComponent;
  let fixture: ComponentFixture<PrintParentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrintParentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrintParentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
