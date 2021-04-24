import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NotifpereComponent } from './notifpere.component';

describe('NotifpereComponent', () => {
  let component: NotifpereComponent;
  let fixture: ComponentFixture<NotifpereComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NotifpereComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NotifpereComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
