import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Frequent1Component } from './frequent1.component';

describe('Frequent1Component', () => {
  let component: Frequent1Component;
  let fixture: ComponentFixture<Frequent1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Frequent1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Frequent1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
