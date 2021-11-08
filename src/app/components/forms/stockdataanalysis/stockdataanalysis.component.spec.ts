import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StockdataanalysisComponent } from './stockdataanalysis.component';

describe('StockdataanalysisComponent', () => {
  let component: StockdataanalysisComponent;
  let fixture: ComponentFixture<StockdataanalysisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StockdataanalysisComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StockdataanalysisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
