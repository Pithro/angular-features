import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildService2Component } from './child-service2.component';

describe('ChildService2Component', () => {
  let component: ChildService2Component;
  let fixture: ComponentFixture<ChildService2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChildService2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChildService2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
