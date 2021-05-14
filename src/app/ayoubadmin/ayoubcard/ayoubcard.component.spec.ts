import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AyoubcardComponent } from './ayoubcard.component';

describe('AyoubcardComponent', () => {
  let component: AyoubcardComponent;
  let fixture: ComponentFixture<AyoubcardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AyoubcardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AyoubcardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
