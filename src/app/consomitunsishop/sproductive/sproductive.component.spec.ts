import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SproductiveComponent } from './sproductive.component';

describe('SproductiveComponent', () => {
  let component: SproductiveComponent;
  let fixture: ComponentFixture<SproductiveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SproductiveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SproductiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
