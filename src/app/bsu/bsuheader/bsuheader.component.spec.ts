import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BsuheaderComponent } from './bsuheader.component';

describe('BsuheaderComponent', () => {
  let component: BsuheaderComponent;
  let fixture: ComponentFixture<BsuheaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BsuheaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BsuheaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
