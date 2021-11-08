import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LocationwiseComponent } from './locationwise.component';

describe('LocationwiseComponent', () => {
  let component: LocationwiseComponent;
  let fixture: ComponentFixture<LocationwiseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LocationwiseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LocationwiseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
