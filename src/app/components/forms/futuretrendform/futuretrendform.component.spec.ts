import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FuturetrendformComponent } from './futuretrendform.component';

describe('FuturetrendformComponent', () => {
  let component: FuturetrendformComponent;
  let fixture: ComponentFixture<FuturetrendformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FuturetrendformComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FuturetrendformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
