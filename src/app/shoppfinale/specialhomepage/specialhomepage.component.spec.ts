import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpecialhomepageComponent } from './specialhomepage.component';

describe('SpecialhomepageComponent', () => {
  let component: SpecialhomepageComponent;
  let fixture: ComponentFixture<SpecialhomepageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpecialhomepageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpecialhomepageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
