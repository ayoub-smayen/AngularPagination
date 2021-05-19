import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DelivdisplaysearchComponent } from './delivdisplaysearch.component';

describe('DelivdisplaysearchComponent', () => {
  let component: DelivdisplaysearchComponent;
  let fixture: ComponentFixture<DelivdisplaysearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DelivdisplaysearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DelivdisplaysearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
