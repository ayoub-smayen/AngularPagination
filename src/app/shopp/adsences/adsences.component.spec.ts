import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdsencesComponent } from './adsences.component';

describe('AdsencesComponent', () => {
  let component: AdsencesComponent;
  let fixture: ComponentFixture<AdsencesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdsencesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdsencesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
