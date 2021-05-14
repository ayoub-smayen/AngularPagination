import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PutproductComponent } from './putproduct.component';

describe('PutproductComponent', () => {
  let component: PutproductComponent;
  let fixture: ComponentFixture<PutproductComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PutproductComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PutproductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
