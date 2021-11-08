import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrendscategorywiseComponent } from './trendscategorywise.component';

describe('TrendscategorywiseComponent', () => {
  let component: TrendscategorywiseComponent;
  let fixture: ComponentFixture<TrendscategorywiseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrendscategorywiseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TrendscategorywiseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
