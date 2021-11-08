import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TcustomerwiseformComponent } from './tcustomerwiseform.component';

describe('TcustomerwiseformComponent', () => {
  let component: TcustomerwiseformComponent;
  let fixture: ComponentFixture<TcustomerwiseformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TcustomerwiseformComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TcustomerwiseformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
