import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Paypal1Component } from './paypal1.component';

describe('Paypal1Component', () => {
  let component: Paypal1Component;
  let fixture: ComponentFixture<Paypal1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Paypal1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Paypal1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
