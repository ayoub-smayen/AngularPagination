import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Chartshop0Component } from './chartshop0.component';

describe('Chartshop0Component', () => {
  let component: Chartshop0Component;
  let fixture: ComponentFixture<Chartshop0Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Chartshop0Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Chartshop0Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
