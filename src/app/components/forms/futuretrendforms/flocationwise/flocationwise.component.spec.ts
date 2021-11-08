import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlocationwiseComponent } from './flocationwise.component';

describe('FlocationwiseComponent', () => {
  let component: FlocationwiseComponent;
  let fixture: ComponentFixture<FlocationwiseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FlocationwiseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FlocationwiseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
