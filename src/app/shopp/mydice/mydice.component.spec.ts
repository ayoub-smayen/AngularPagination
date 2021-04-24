import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MydiceComponent } from './mydice.component';

describe('MydiceComponent', () => {
  let component: MydiceComponent;
  let fixture: ComponentFixture<MydiceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MydiceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MydiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
