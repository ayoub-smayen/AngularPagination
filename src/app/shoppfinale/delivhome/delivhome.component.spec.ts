import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DelivhomeComponent } from './delivhome.component';

describe('DelivhomeComponent', () => {
  let component: DelivhomeComponent;
  let fixture: ComponentFixture<DelivhomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DelivhomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DelivhomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
