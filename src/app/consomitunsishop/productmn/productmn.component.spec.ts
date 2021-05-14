import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductmnComponent } from './productmn.component';

describe('ProductmnComponent', () => {
  let component: ProductmnComponent;
  let fixture: ComponentFixture<ProductmnComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductmnComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductmnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
