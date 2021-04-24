import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Filtershop2Component } from './filtershop2.component';

describe('Filtershop2Component', () => {
  let component: Filtershop2Component;
  let fixture: ComponentFixture<Filtershop2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Filtershop2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Filtershop2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
