import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LectureQuestionsComponent } from './lecture-questions.component';

describe('LectureQuestionsComponent', () => {
  let component: LectureQuestionsComponent;
  let fixture: ComponentFixture<LectureQuestionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LectureQuestionsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LectureQuestionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
