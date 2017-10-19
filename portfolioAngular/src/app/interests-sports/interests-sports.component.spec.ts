import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InterestsSportsComponent } from './interests-sports.component';

describe('InterestsSportsComponent', () => {
  let component: InterestsSportsComponent;
  let fixture: ComponentFixture<InterestsSportsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InterestsSportsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InterestsSportsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
