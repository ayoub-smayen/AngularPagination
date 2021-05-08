import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddDelivComponent } from './add-deliv.component';

describe('AddDelivComponent', () => {
  let component: AddDelivComponent;
  let fixture: ComponentFixture<AddDelivComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddDelivComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddDelivComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
