import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShoppageComponent } from './shoppage.component';

describe('ShoppageComponent', () => {
  let component: ShoppageComponent;
  let fixture: ComponentFixture<ShoppageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShoppageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShoppageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
