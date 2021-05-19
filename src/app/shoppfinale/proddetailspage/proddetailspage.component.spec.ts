import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProddetailspageComponent } from './proddetailspage.component';

describe('ProddetailspageComponent', () => {
  let component: ProddetailspageComponent;
  let fixture: ComponentFixture<ProddetailspageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProddetailspageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProddetailspageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
