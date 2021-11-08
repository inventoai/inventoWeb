import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FproductwiseComponent } from './fproductwise.component';

describe('FproductwiseComponent', () => {
  let component: FproductwiseComponent;
  let fixture: ComponentFixture<FproductwiseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FproductwiseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FproductwiseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
