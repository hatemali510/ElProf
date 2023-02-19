import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LectureHomeWorkComponent } from './lecture-home-work.component';

describe('LectureHomeWorkComponent', () => {
  let component: LectureHomeWorkComponent;
  let fixture: ComponentFixture<LectureHomeWorkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LectureHomeWorkComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LectureHomeWorkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
