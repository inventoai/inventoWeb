import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SalesdataanalysisComponent } from './salesdataanalysis.component';

describe('SalesdataanalysisComponent', () => {
  let component: SalesdataanalysisComponent;
  let fixture: ComponentFixture<SalesdataanalysisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SalesdataanalysisComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SalesdataanalysisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
