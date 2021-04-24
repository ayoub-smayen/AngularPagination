import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WishlistshoppingComponent } from './wishlistshopping.component';

describe('WishlistshoppingComponent', () => {
  let component: WishlistshoppingComponent;
  let fixture: ComponentFixture<WishlistshoppingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WishlistshoppingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WishlistshoppingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
