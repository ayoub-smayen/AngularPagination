import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopchattingComponent } from './shopchatting.component';

describe('ShopchattingComponent', () => {
  let component: ShopchattingComponent;
  let fixture: ComponentFixture<ShopchattingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShopchattingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShopchattingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
