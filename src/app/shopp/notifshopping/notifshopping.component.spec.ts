import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NotifshoppingComponent } from './notifshopping.component';

describe('NotifshoppingComponent', () => {
  let component: NotifshoppingComponent;
  let fixture: ComponentFixture<NotifshoppingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NotifshoppingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NotifshoppingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
