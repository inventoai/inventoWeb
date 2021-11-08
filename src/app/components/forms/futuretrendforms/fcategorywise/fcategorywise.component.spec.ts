import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FcategorywiseComponent } from './fcategorywise.component';

describe('FcategorywiseComponent', () => {
  let component: FcategorywiseComponent;
  let fixture: ComponentFixture<FcategorywiseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FcategorywiseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FcategorywiseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
