import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MapspageComponent } from './mapspage.component';

describe('MapspageComponent', () => {
  let component: MapspageComponent;
  let fixture: ComponentFixture<MapspageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MapspageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MapspageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
