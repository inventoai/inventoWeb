import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BsuComponent } from './bsu.component';

describe('BsuComponent', () => {
  let component: BsuComponent;
  let fixture: ComponentFixture<BsuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BsuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BsuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
