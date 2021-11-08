import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FcustomerwiseComponent } from './fcustomerwise.component';

describe('FcustomerwiseComponent', () => {
  let component: FcustomerwiseComponent;
  let fixture: ComponentFixture<FcustomerwiseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FcustomerwiseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FcustomerwiseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
