import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductBestComponent } from './product-best.component';

describe('ProductBestComponent', () => {
  let component: ProductBestComponent;
  let fixture: ComponentFixture<ProductBestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductBestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductBestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
