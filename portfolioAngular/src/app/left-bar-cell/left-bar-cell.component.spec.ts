import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LeftBarCellComponent } from './left-bar-cell.component';

describe('LeftBarCellComponent', () => {
  let component: LeftBarCellComponent;
  let fixture: ComponentFixture<LeftBarCellComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LeftBarCellComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LeftBarCellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
