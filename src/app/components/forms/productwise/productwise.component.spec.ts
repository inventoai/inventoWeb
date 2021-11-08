import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductwiseComponent } from './productwise.component';

describe('ProductwiseComponent', () => {
  let component: ProductwiseComponent;
  let fixture: ComponentFixture<ProductwiseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductwiseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductwiseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
