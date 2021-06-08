import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PublicitiesComponent } from './publicities.component';

describe('PublicitiesComponent', () => {
  let component: PublicitiesComponent;
  let fixture: ComponentFixture<PublicitiesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PublicitiesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PublicitiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
