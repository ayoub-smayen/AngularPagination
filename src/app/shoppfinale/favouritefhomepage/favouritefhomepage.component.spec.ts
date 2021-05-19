import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FavouritefhomepageComponent } from './favouritefhomepage.component';

describe('FavouritefhomepageComponent', () => {
  let component: FavouritefhomepageComponent;
  let fixture: ComponentFixture<FavouritefhomepageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FavouritefhomepageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FavouritefhomepageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
