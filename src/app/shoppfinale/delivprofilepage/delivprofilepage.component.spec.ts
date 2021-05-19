import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DelivprofilepageComponent } from './delivprofilepage.component';

describe('DelivprofilepageComponent', () => {
  let component: DelivprofilepageComponent;
  let fixture: ComponentFixture<DelivprofilepageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DelivprofilepageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DelivprofilepageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
