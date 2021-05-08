import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateDelivComponent } from './update-deliv.component';

describe('UpdateDelivComponent', () => {
  let component: UpdateDelivComponent;
  let fixture: ComponentFixture<UpdateDelivComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateDelivComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateDelivComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
