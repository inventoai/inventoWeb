import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BsuloginComponent } from './bsulogin.component';

describe('BsuloginComponent', () => {
  let component: BsuloginComponent;
  let fixture: ComponentFixture<BsuloginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BsuloginComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BsuloginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
