import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Profit1Component } from './profit1.component';

describe('Profit1Component', () => {
  let component: Profit1Component;
  let fixture: ComponentFixture<Profit1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Profit1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Profit1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
