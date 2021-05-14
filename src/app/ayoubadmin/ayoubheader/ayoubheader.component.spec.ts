import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AyoubheaderComponent } from './ayoubheader.component';

describe('AyoubheaderComponent', () => {
  let component: AyoubheaderComponent;
  let fixture: ComponentFixture<AyoubheaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AyoubheaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AyoubheaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
