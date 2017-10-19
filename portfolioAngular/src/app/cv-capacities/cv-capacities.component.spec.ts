import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CvCapacitiesComponent } from './cv-capacities.component';

describe('CvCapacitiesComponent', () => {
  let component: CvCapacitiesComponent;
  let fixture: ComponentFixture<CvCapacitiesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CvCapacitiesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CvCapacitiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
