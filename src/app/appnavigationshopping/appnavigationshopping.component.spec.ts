import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppnavigationshoppingComponent } from './appnavigationshopping.component';

describe('AppnavigationshoppingComponent', () => {
  let component: AppnavigationshoppingComponent;
  let fixture: ComponentFixture<AppnavigationshoppingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppnavigationshoppingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppnavigationshoppingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
