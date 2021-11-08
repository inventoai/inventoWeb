import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WebaccessComponent } from './webaccess.component';

describe('WebaccessComponent', () => {
  let component: WebaccessComponent;
  let fixture: ComponentFixture<WebaccessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WebaccessComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WebaccessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
