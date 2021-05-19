import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Forumspage1Component } from './forumspage1.component';

describe('Forumspage1Component', () => {
  let component: Forumspage1Component;
  let fixture: ComponentFixture<Forumspage1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Forumspage1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Forumspage1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
