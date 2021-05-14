import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductexcelComponent } from './productexcel.component';

describe('ProductexcelComponent', () => {
  let component: ProductexcelComponent;
  let fixture: ComponentFixture<ProductexcelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductexcelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductexcelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
