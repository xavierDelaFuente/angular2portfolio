import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CvProgrammingLanguajesComponent } from './cv-programming-languajes.component';

describe('CvProgrammingLanguajesComponent', () => {
  let component: CvProgrammingLanguajesComponent;
  let fixture: ComponentFixture<CvProgrammingLanguajesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CvProgrammingLanguajesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CvProgrammingLanguajesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
