import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FsaleswiseComponent } from './fsaleswise.component';

describe('FsaleswiseComponent', () => {
  let component: FsaleswiseComponent;
  let fixture: ComponentFixture<FsaleswiseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FsaleswiseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FsaleswiseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
