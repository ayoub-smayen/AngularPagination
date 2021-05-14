import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProdfilteringComponent } from './prodfiltering.component';

describe('ProdfilteringComponent', () => {
  let component: ProdfilteringComponent;
  let fixture: ComponentFixture<ProdfilteringComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProdfilteringComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProdfilteringComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
