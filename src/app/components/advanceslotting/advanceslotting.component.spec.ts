import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdvanceslottingComponent } from './advanceslotting.component';

describe('AdvanceslottingComponent', () => {
  let component: AdvanceslottingComponent;
  let fixture: ComponentFixture<AdvanceslottingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdvanceslottingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdvanceslottingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
