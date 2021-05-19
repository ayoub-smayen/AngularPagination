import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BrandpageComponent } from './brandpage.component';

describe('BrandpageComponent', () => {
  let component: BrandpageComponent;
  let fixture: ComponentFixture<BrandpageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BrandpageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BrandpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
