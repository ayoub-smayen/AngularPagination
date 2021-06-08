import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddPublicityPageComponent } from './add-publicity-page.component';

describe('AddPublicityPageComponent', () => {
  let component: AddPublicityPageComponent;
  let fixture: ComponentFixture<AddPublicityPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddPublicityPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddPublicityPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
