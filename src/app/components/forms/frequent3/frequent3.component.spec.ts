import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Frequent3Component } from './frequent3.component';

describe('Frequent3Component', () => {
  let component: Frequent3Component;
  let fixture: ComponentFixture<Frequent3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Frequent3Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Frequent3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
