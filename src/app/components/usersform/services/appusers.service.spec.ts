import { TestBed } from '@angular/core/testing';

import { AppusersService } from './appusers.service';

describe('AppusersService', () => {
  let service: AppusersService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AppusersService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
