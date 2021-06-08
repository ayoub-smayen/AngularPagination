import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PublicitiesPageComponent } from './publicities-page.component';

describe('PublicitiesPageComponent', () => {
  let component: PublicitiesPageComponent;
  let fixture: ComponentFixture<PublicitiesPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PublicitiesPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PublicitiesPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
