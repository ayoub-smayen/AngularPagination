import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildshopComponent } from './childshop.component';

describe('ChildshopComponent', () => {
  let component: ChildshopComponent;
  let fixture: ComponentFixture<ChildshopComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChildshopComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChildshopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
