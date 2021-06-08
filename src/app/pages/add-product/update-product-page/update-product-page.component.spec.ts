import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateProductPageComponent } from './update-product-page.component';

describe('AddProductPageComponent', () => {
  let component: UpdateProductPageComponent;
  let fixture: ComponentFixture<UpdateProductPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateProductPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateProductPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
