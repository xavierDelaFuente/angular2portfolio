import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CvOtherExperiencesComponent } from './cv-other-experiences.component';

describe('CvOtherExperiencesComponent', () => {
  let component: CvOtherExperiencesComponent;
  let fixture: ComponentFixture<CvOtherExperiencesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CvOtherExperiencesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CvOtherExperiencesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
