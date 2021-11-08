import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TproductwiseformComponent } from './tproductwiseform.component';

describe('TproductwiseformComponent', () => {
  let component: TproductwiseformComponent;
  let fixture: ComponentFixture<TproductwiseformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TproductwiseformComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TproductwiseformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
