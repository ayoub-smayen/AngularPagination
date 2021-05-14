import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RayComponent } from './ray.component';

describe('RayComponent', () => {
  let component: RayComponent;
  let fixture: ComponentFixture<RayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
