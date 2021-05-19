import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Wishlistspage1Component } from './wishlistspage1.component';

describe('Wishlistspage1Component', () => {
  let component: Wishlistspage1Component;
  let fixture: ComponentFixture<Wishlistspage1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Wishlistspage1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Wishlistspage1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
