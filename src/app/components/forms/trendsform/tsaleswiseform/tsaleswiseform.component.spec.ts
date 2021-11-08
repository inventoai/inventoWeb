import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TsaleswiseformComponent } from './tsaleswiseform.component';

describe('TsaleswiseformComponent', () => {
  let component: TsaleswiseformComponent;
  let fixture: ComponentFixture<TsaleswiseformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TsaleswiseformComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TsaleswiseformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
