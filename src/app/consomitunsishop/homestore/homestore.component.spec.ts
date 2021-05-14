import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomestoreComponent } from './homestore.component';

describe('HomestoreComponent', () => {
  let component: HomestoreComponent;
  let fixture: ComponentFixture<HomestoreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomestoreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomestoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
