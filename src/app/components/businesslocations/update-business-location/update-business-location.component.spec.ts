import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateBusinessLocationComponent } from './update-business-location.component';

describe('UpdateBusinessLocationComponent', () => {
  let component: UpdateBusinessLocationComponent;
  let fixture: ComponentFixture<UpdateBusinessLocationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateBusinessLocationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateBusinessLocationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
