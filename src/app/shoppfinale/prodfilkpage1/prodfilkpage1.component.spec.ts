import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Prodfilkpage1Component } from './prodfilkpage1.component';

describe('Prodfilkpage1Component', () => {
  let component: Prodfilkpage1Component;
  let fixture: ComponentFixture<Prodfilkpage1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Prodfilkpage1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Prodfilkpage1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
