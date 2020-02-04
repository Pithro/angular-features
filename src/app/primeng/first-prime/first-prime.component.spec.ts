import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FirstPrimeComponent } from './first-prime.component';

describe('FirstPrimeComponent', () => {
  let component: FirstPrimeComponent;
  let fixture: ComponentFixture<FirstPrimeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FirstPrimeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FirstPrimeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
