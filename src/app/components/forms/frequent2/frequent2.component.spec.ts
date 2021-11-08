import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Frequent2Component } from './frequent2.component';

describe('Frequent2Component', () => {
  let component: Frequent2Component;
  let fixture: ComponentFixture<Frequent2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Frequent2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Frequent2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
