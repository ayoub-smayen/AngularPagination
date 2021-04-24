import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopsettingsComponent } from './shopsettings.component';

describe('ShopsettingsComponent', () => {
  let component: ShopsettingsComponent;
  let fixture: ComponentFixture<ShopsettingsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShopsettingsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShopsettingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
