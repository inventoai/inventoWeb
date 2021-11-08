import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommonproductComponent } from './commonproduct.component';

describe('CommonproductComponent', () => {
  let component: CommonproductComponent;
  let fixture: ComponentFixture<CommonproductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CommonproductComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CommonproductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
