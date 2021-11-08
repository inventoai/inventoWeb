import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TlocationwiseformComponent } from './tlocationwiseform.component';

describe('TlocationwiseformComponent', () => {
  let component: TlocationwiseformComponent;
  let fixture: ComponentFixture<TlocationwiseformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TlocationwiseformComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TlocationwiseformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
