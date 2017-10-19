import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PortfolioInterestsComponent } from './portfolio-interests.component';

describe('PortfolioInterestsComponent', () => {
  let component: PortfolioInterestsComponent;
  let fixture: ComponentFixture<PortfolioInterestsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PortfolioInterestsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PortfolioInterestsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
