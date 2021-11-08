import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BusinesslocationComponent } from './businesslocation.component';

describe('BusinesslocationComponent', () => {
  let component: BusinesslocationComponent;
  let fixture: ComponentFixture<BusinesslocationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BusinesslocationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BusinesslocationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
