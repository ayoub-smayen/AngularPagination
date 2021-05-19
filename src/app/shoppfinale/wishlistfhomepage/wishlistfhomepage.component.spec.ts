import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WishlistfhomepageComponent } from './wishlistfhomepage.component';

describe('WishlistfhomepageComponent', () => {
  let component: WishlistfhomepageComponent;
  let fixture: ComponentFixture<WishlistfhomepageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WishlistfhomepageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WishlistfhomepageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
