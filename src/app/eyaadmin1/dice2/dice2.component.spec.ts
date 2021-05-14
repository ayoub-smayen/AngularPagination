import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Dice2Component } from './dice2.component';

describe('Dice2Component', () => {
  let component: Dice2Component;
  let fixture: ComponentFixture<Dice2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Dice2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Dice2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
