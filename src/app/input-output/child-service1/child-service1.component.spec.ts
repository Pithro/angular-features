import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildService1Component } from './child-service1.component';

describe('ChildService1Component', () => {
  let component: ChildService1Component;
  let fixture: ComponentFixture<ChildService1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChildService1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChildService1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
