import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeliverymanPageComponent } from './deliveryman-page.component';

describe('DeliverymanPageComponent', () => {
  let component: DeliverymanPageComponent;
  let fixture: ComponentFixture<DeliverymanPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeliverymanPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeliverymanPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
