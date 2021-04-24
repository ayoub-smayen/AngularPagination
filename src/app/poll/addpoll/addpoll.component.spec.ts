import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddpollComponent } from './addpoll.component';

describe('AddpollComponent', () => {
  let component: AddpollComponent;
  let fixture: ComponentFixture<AddpollComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddpollComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddpollComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
