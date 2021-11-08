import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnalyzereportComponent } from './analyzereport.component';

describe('AnalyzereportComponent', () => {
  let component: AnalyzereportComponent;
  let fixture: ComponentFixture<AnalyzereportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnalyzereportComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AnalyzereportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
