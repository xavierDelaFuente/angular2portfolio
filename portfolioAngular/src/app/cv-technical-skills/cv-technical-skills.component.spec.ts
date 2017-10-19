import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CvTechnicalSkillsComponent } from './cv-technical-skills.component';

describe('CvTechnicalSkillsComponent', () => {
  let component: CvTechnicalSkillsComponent;
  let fixture: ComponentFixture<CvTechnicalSkillsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CvTechnicalSkillsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CvTechnicalSkillsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
