import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterfhomepageComponent } from './footerfhomepage.component';

describe('FooterfhomepageComponent', () => {
  let component: FooterfhomepageComponent;
  let fixture: ComponentFixture<FooterfhomepageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FooterfhomepageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FooterfhomepageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
