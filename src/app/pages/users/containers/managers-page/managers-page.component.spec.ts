import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagersPageComponent } from './managers-page.component';

describe('ManagersPageComponent', () => {
  let component: ManagersPageComponent;
  let fixture: ComponentFixture<ManagersPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManagersPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManagersPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
