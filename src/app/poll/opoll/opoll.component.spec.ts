import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OpollComponent } from './opoll.component';

describe('OpollComponent', () => {
  let component: OpollComponent;
  let fixture: ComponentFixture<OpollComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OpollComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OpollComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
