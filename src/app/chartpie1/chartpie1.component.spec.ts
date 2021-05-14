import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Chartpie1Component } from './chartpie1.component';

describe('Chartpie1Component', () => {
  let component: Chartpie1Component;
  let fixture: ComponentFixture<Chartpie1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Chartpie1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Chartpie1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
