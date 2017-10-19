import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InterestsMusicComponent } from './interests-music.component';

describe('InterestsMusicComponent', () => {
  let component: InterestsMusicComponent;
  let fixture: ComponentFixture<InterestsMusicComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InterestsMusicComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InterestsMusicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
