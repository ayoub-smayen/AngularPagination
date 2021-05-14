import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PutcategoryComponent } from './putcategory.component';

describe('PutcategoryComponent', () => {
  let component: PutcategoryComponent;
  let fixture: ComponentFixture<PutcategoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PutcategoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PutcategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
