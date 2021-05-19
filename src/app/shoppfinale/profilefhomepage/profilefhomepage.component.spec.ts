import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfilefhomepageComponent } from './profilefhomepage.component';

describe('ProfilefhomepageComponent', () => {
  let component: ProfilefhomepageComponent;
  let fixture: ComponentFixture<ProfilefhomepageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfilefhomepageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfilefhomepageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
