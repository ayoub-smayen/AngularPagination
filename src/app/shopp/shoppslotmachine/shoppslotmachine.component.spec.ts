import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShoppslotmachineComponent } from './shoppslotmachine.component';

describe('ShoppslotmachineComponent', () => {
  let component: ShoppslotmachineComponent;
  let fixture: ComponentFixture<ShoppslotmachineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShoppslotmachineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShoppslotmachineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
