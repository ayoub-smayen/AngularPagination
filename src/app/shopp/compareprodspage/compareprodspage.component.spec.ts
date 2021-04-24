import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompareprodspageComponent } from './compareprodspage.component';

describe('CompareprodspageComponent', () => {
  let component: CompareprodspageComponent;
  let fixture: ComponentFixture<CompareprodspageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompareprodspageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompareprodspageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
