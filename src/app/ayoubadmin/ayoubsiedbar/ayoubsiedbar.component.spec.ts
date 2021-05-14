import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AyoubsiedbarComponent } from './ayoubsiedbar.component';

describe('AyoubsiedbarComponent', () => {
  let component: AyoubsiedbarComponent;
  let fixture: ComponentFixture<AyoubsiedbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AyoubsiedbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AyoubsiedbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
