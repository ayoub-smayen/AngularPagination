import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Cartshopping1Component } from './cartshopping1.component';

describe('Cartshopping1Component', () => {
  let component: Cartshopping1Component;
  let fixture: ComponentFixture<Cartshopping1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Cartshopping1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Cartshopping1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
