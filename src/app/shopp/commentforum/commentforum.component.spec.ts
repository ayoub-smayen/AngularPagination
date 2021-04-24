import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CommentforumComponent } from './commentforum.component';

describe('CommentforumComponent', () => {
  let component: CommentforumComponent;
  let fixture: ComponentFixture<CommentforumComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CommentforumComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CommentforumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
