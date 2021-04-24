import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShoppmapComponent } from './shoppmap.component';

describe('ShoppmapComponent', () => {
  let component: ShoppmapComponent;
  let fixture: ComponentFixture<ShoppmapComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShoppmapComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShoppmapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
