import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NotifchildComponent } from './notifchild.component';

describe('NotifchildComponent', () => {
  let component: NotifchildComponent;
  let fixture: ComponentFixture<NotifchildComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NotifchildComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NotifchildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
