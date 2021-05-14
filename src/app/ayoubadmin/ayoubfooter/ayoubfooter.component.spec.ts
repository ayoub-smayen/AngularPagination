import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AyoubfooterComponent } from './ayoubfooter.component';

describe('AyoubfooterComponent', () => {
  let component: AyoubfooterComponent;
  let fixture: ComponentFixture<AyoubfooterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AyoubfooterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AyoubfooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
