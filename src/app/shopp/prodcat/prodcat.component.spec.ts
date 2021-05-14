import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProdcatComponent } from './prodcat.component';

describe('ProdcatComponent', () => {
  let component: ProdcatComponent;
  let fixture: ComponentFixture<ProdcatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProdcatComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProdcatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
