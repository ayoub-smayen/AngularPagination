import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Childshop2Component } from './childshop2.component';

describe('Childshop2Component', () => {
  let component: Childshop2Component;
  let fixture: ComponentFixture<Childshop2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Childshop2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Childshop2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
