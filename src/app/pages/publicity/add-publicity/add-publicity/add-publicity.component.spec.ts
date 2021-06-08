import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddPublicityComponent } from './add-publicity.component';

describe('AddPublicityComponent', () => {
  let component: AddPublicityComponent;
  let fixture: ComponentFixture<AddPublicityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddPublicityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddPublicityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
