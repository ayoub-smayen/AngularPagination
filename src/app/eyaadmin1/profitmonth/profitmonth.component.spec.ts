import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfitmonthComponent } from './profitmonth.component';

describe('ProfitmonthComponent', () => {
  let component: ProfitmonthComponent;
  let fixture: ComponentFixture<ProfitmonthComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfitmonthComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfitmonthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
