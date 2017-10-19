import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CvProfessionalExperienceComponent } from './cv-professional-experience.component';

describe('CvProfessionalExperienceComponent', () => {
  let component: CvProfessionalExperienceComponent;
  let fixture: ComponentFixture<CvProfessionalExperienceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CvProfessionalExperienceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CvProfessionalExperienceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
