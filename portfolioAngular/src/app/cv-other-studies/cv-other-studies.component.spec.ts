import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CvOtherStudiesComponent } from './cv-other-studies.component';

describe('CvOtherStudiesComponent', () => {
  let component: CvOtherStudiesComponent;
  let fixture: ComponentFixture<CvOtherStudiesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CvOtherStudiesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CvOtherStudiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
