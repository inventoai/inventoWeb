import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FstockwiseComponent } from './fstockwise.component';

describe('FstockwiseComponent', () => {
  let component: FstockwiseComponent;
  let fixture: ComponentFixture<FstockwiseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FstockwiseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FstockwiseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
