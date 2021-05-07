import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfitpermonthComponent } from './profitpermonth.component';

describe('ProfitpermonthComponent', () => {
  let component: ProfitpermonthComponent;
  let fixture: ComponentFixture<ProfitpermonthComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfitpermonthComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfitpermonthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
