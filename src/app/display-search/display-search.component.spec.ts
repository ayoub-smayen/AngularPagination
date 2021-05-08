import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplaySearchComponent } from './display-search.component';

describe('DisplaySearchComponent', () => {
  let component: DisplaySearchComponent;
  let fixture: ComponentFixture<DisplaySearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DisplaySearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplaySearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
