import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopppublicityComponent } from './shopppublicity.component';

describe('ShopppublicityComponent', () => {
  let component: ShopppublicityComponent;
  let fixture: ComponentFixture<ShopppublicityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShopppublicityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShopppublicityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
