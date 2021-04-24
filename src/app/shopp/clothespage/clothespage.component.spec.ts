import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClothespageComponent } from './clothespage.component';

describe('ClothespageComponent', () => {
  let component: ClothespageComponent;
  let fixture: ComponentFixture<ClothespageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClothespageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClothespageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
