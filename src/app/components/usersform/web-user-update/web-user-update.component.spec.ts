import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WebUserUpdateComponent } from './web-user-update.component';

describe('WebUserUpdateComponent', () => {
  let component: WebUserUpdateComponent;
  let fixture: ComponentFixture<WebUserUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WebUserUpdateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WebUserUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
