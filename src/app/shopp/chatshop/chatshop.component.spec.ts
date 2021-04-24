import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatshopComponent } from './chatshop.component';

describe('ChatshopComponent', () => {
  let component: ChatshopComponent;
  let fixture: ComponentFixture<ChatshopComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChatshopComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChatshopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
