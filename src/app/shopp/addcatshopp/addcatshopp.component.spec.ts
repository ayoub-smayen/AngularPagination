import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddcatshoppComponent } from './addcatshopp.component';

describe('AddcatshoppComponent', () => {
  let component: AddcatshoppComponent;
  let fixture: ComponentFixture<AddcatshoppComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddcatshoppComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddcatshoppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
