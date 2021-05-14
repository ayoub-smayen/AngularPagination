import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductcathomeComponent } from './productcathome.component';

describe('ProductcathomeComponent', () => {
  let component: ProductcathomeComponent;
  let fixture: ComponentFixture<ProductcathomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductcathomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductcathomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
