import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CvCertifiedStudiesComponent } from './cv-certified-studies.component';

describe('CvCertifiedStudiesComponent', () => {
  let component: CvCertifiedStudiesComponent;
  let fixture: ComponentFixture<CvCertifiedStudiesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CvCertifiedStudiesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CvCertifiedStudiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
