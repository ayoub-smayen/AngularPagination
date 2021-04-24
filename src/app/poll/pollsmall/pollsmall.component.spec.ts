import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PollsmallComponent } from './pollsmall.component';

describe('PollsmallComponent', () => {
  let component: PollsmallComponent;
  let fixture: ComponentFixture<PollsmallComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PollsmallComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PollsmallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
