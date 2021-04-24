import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Chartshop2Component } from './chartshop2.component';

describe('Chartshop2Component', () => {
  let component: Chartshop2Component;
  let fixture: ComponentFixture<Chartshop2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Chartshop2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Chartshop2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
