import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartyComponent } from './charty.component';

describe('ChartyComponent', () => {
  let component: ChartyComponent;
  let fixture: ComponentFixture<ChartyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChartyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChartyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
