import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InterestsVolunteeringComponent } from './interests-volunteering.component';

describe('InterestsVolunteeringComponent', () => {
  let component: InterestsVolunteeringComponent;
  let fixture: ComponentFixture<InterestsVolunteeringComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InterestsVolunteeringComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InterestsVolunteeringComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
