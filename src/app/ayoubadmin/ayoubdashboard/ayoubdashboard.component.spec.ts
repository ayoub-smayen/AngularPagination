import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AyoubdashboardComponent } from './ayoubdashboard.component';

describe('AyoubdashboardComponent', () => {
  let component: AyoubdashboardComponent;
  let fixture: ComponentFixture<AyoubdashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AyoubdashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AyoubdashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
