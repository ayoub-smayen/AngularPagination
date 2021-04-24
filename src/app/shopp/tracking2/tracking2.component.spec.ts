import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Tracking2Component } from './tracking2.component';

describe('Tracking2Component', () => {
  let component: Tracking2Component;
  let fixture: ComponentFixture<Tracking2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Tracking2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Tracking2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
