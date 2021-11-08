import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TimewiseComponent } from './timewise.component';

describe('TimewiseComponent', () => {
  let component: TimewiseComponent;
  let fixture: ComponentFixture<TimewiseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TimewiseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TimewiseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
