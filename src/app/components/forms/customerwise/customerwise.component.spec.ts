import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerwiseComponent } from './customerwise.component';

describe('CustomerwiseComponent', () => {
  let component: CustomerwiseComponent;
  let fixture: ComponentFixture<CustomerwiseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomerwiseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerwiseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
