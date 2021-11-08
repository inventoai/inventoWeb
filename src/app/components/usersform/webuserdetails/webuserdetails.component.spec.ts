import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WebuserdetailsComponent } from './webuserdetails.component';

describe('WebuserdetailsComponent', () => {
  let component: WebuserdetailsComponent;
  let fixture: ComponentFixture<WebuserdetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WebuserdetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WebuserdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
