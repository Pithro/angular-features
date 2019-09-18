import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsepipeComponent } from './usepipe.component';

describe('UsepipeComponent', () => {
  let component: UsepipeComponent;
  let fixture: ComponentFixture<UsepipeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsepipeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsepipeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
