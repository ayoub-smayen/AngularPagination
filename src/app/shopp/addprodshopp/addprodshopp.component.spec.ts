import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddprodshoppComponent } from './addprodshopp.component';

describe('AddprodshoppComponent', () => {
  let component: AddprodshoppComponent;
  let fixture: ComponentFixture<AddprodshoppComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddprodshoppComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddprodshoppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
