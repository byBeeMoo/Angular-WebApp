import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommentsFrameComponent } from './comments-frame.component';

describe('CommentsFrameComponent', () => {
  let component: CommentsFrameComponent;
  let fixture: ComponentFixture<CommentsFrameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CommentsFrameComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CommentsFrameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
