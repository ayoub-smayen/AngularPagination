import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RayCreateComponent } from './ray-create.component';

describe('RayCreateComponent', () => {
  let component: RayCreateComponent;
  let fixture: ComponentFixture<RayCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RayCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RayCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
