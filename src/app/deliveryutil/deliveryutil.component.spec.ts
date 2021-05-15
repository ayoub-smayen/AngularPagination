import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeliveryutilComponent } from './deliveryutil.component';

describe('DeliveryutilComponent', () => {
  let component: DeliveryutilComponent;
  let fixture: ComponentFixture<DeliveryutilComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeliveryutilComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeliveryutilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
