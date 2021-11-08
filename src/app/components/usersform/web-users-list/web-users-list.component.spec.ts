import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WebUsersListComponent } from './web-users-list.component';

describe('WebUsersListComponent', () => {
  let component: WebUsersListComponent;
  let fixture: ComponentFixture<WebUsersListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WebUsersListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WebUsersListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
