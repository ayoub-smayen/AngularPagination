import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Shopnotif2Component } from './shopnotif2.component';

describe('Shopnotif2Component', () => {
  let component: Shopnotif2Component;
  let fixture: ComponentFixture<Shopnotif2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Shopnotif2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Shopnotif2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
