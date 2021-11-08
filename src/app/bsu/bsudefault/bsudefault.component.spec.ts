import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BsudefaultComponent } from './bsudefault.component';

describe('BsudefaultComponent', () => {
  let component: BsudefaultComponent;
  let fixture: ComponentFixture<BsudefaultComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BsudefaultComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BsudefaultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
