import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TstockwiseformComponent } from './tstockwiseform.component';

describe('TstockwiseformComponent', () => {
  let component: TstockwiseformComponent;
  let fixture: ComponentFixture<TstockwiseformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TstockwiseformComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TstockwiseformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
