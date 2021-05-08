import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneralstatisticComponent } from './generalstatistic.component';

describe('GeneralstatisticComponent', () => {
  let component: GeneralstatisticComponent;
  let fixture: ComponentFixture<GeneralstatisticComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GeneralstatisticComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GeneralstatisticComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
