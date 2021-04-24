import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PayementshopComponent } from './payementshop.component';

describe('PayementshopComponent', () => {
  let component: PayementshopComponent;
  let fixture: ComponentFixture<PayementshopComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PayementshopComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PayementshopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
