import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewlocationformComponent } from './newlocationform.component';

describe('NewlocationformComponent', () => {
  let component: NewlocationformComponent;
  let fixture: ComponentFixture<NewlocationformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewlocationformComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewlocationformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
