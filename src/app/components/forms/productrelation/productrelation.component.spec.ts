import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductrelationComponent } from './productrelation.component';

describe('ProductrelationComponent', () => {
  let component: ProductrelationComponent;
  let fixture: ComponentFixture<ProductrelationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductrelationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductrelationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
