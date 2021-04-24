import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopmenuComponent } from './shopmenu.component';

describe('ShopmenuComponent', () => {
  let component: ShopmenuComponent;
  let fixture: ComponentFixture<ShopmenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShopmenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShopmenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
