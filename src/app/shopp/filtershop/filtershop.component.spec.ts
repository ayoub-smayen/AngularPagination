import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FiltershopComponent } from './filtershop.component';

describe('FiltershopComponent', () => {
  let component: FiltershopComponent;
  let fixture: ComponentFixture<FiltershopComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FiltershopComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FiltershopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
