import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AyoubareaComponent } from './ayoubarea.component';

describe('AyoubareaComponent', () => {
  let component: AyoubareaComponent;
  let fixture: ComponentFixture<AyoubareaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AyoubareaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AyoubareaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
