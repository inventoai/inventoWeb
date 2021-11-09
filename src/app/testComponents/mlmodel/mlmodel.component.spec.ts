import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MLModelComponent } from './mlmodel.component';

describe('MLModelComponent', () => {
  let component: MLModelComponent;
  let fixture: ComponentFixture<MLModelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MLModelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MLModelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
