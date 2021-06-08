import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeliverymanTableComponent } from './deliveryman-table.component';

describe('DeliverymanTableComponent', () => {
  let component: DeliverymanTableComponent;
  let fixture: ComponentFixture<DeliverymanTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeliverymanTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeliverymanTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
