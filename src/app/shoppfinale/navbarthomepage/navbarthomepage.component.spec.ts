import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarthomepageComponent } from './navbarthomepage.component';

describe('NavbarthomepageComponent', () => {
  let component: NavbarthomepageComponent;
  let fixture: ComponentFixture<NavbarthomepageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavbarthomepageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavbarthomepageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
