import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CliamNumbComponent } from './cliam-numb.component';

describe('CliamNumbComponent', () => {
  let component: CliamNumbComponent;
  let fixture: ComponentFixture<CliamNumbComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CliamNumbComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CliamNumbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
