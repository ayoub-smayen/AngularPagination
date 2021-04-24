import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Rayon1Component } from './rayon1.component';

describe('Rayon1Component', () => {
  let component: Rayon1Component;
  let fixture: ComponentFixture<Rayon1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Rayon1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Rayon1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
