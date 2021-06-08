import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RayListComponent } from './ray-list.component';

describe('RayListComponent', () => {
  let component: RayListComponent;
  let fixture: ComponentFixture<RayListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RayListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RayListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
