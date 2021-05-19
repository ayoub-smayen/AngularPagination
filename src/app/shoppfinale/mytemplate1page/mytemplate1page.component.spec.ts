import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Mytemplate1pageComponent } from './mytemplate1page.component';

describe('Mytemplate1pageComponent', () => {
  let component: Mytemplate1pageComponent;
  let fixture: ComponentFixture<Mytemplate1pageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Mytemplate1pageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Mytemplate1pageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
