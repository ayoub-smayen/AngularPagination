import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FinalhomepageComponent } from './finalhomepage.component';

describe('FinalhomepageComponent', () => {
  let component: FinalhomepageComponent;
  let fixture: ComponentFixture<FinalhomepageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FinalhomepageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FinalhomepageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
