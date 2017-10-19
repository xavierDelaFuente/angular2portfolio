import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CvLanguajesComponent } from './cv-languajes.component';

describe('CvLanguajesComponent', () => {
  let component: CvLanguajesComponent;
  let fixture: ComponentFixture<CvLanguajesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CvLanguajesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CvLanguajesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
