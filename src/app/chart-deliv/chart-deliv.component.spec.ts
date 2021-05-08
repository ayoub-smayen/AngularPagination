import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartDelivComponent } from './chart-deliv.component';

describe('ChartDelivComponent', () => {
  let component: ChartDelivComponent;
  let fixture: ComponentFixture<ChartDelivComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChartDelivComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChartDelivComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
