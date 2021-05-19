import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CartprodpageComponent } from './cartprodpage.component';

describe('CartprodpageComponent', () => {
  let component: CartprodpageComponent;
  let fixture: ComponentFixture<CartprodpageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CartprodpageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CartprodpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
