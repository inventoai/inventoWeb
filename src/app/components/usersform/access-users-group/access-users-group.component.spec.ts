import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccessUsersGroupComponent } from './access-users-group.component';

describe('AccessUsersGroupComponent', () => {
  let component: AccessUsersGroupComponent;
  let fixture: ComponentFixture<AccessUsersGroupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccessUsersGroupComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AccessUsersGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
