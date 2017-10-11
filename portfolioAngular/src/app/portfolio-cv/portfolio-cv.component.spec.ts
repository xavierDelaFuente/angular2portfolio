import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PortfolioCvComponent } from './portfolio-cv.component';

describe('PortfolioCvComponent', () => {
  let component: PortfolioCvComponent;
  let fixture: ComponentFixture<PortfolioCvComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PortfolioCvComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PortfolioCvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
