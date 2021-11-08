import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddBusinessLocationComponent } from './add-business-location.component';

describe('AddBusinessLocationComponent', () => {
  let component: AddBusinessLocationComponent;
  let fixture: ComponentFixture<AddBusinessLocationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddBusinessLocationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddBusinessLocationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
