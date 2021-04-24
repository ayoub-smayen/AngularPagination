import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MessagedeliveryComponent } from './messagedelivery.component';

describe('MessagedeliveryComponent', () => {
  let component: MessagedeliveryComponent;
  let fixture: ComponentFixture<MessagedeliveryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MessagedeliveryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MessagedeliveryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
