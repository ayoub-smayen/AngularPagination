import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SimulatorgameComponent } from './simulatorgame.component';

describe('SimulatorgameComponent', () => {
  let component: SimulatorgameComponent;
  let fixture: ComponentFixture<SimulatorgameComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SimulatorgameComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SimulatorgameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
