import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Shoppmap2Component } from './shoppmap2.component';

describe('Shoppmap2Component', () => {
  let component: Shoppmap2Component;
  let fixture: ComponentFixture<Shoppmap2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Shoppmap2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Shoppmap2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
