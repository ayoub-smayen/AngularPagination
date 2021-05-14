import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AyoubpieComponent } from './ayoubpie.component';

describe('AyoubpieComponent', () => {
  let component: AyoubpieComponent;
  let fixture: ComponentFixture<AyoubpieComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AyoubpieComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AyoubpieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
