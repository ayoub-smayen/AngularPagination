import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Chartshop1Component } from './chartshop1.component';

describe('Chartshop1Component', () => {
  let component: Chartshop1Component;
  let fixture: ComponentFixture<Chartshop1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Chartshop1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Chartshop1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
