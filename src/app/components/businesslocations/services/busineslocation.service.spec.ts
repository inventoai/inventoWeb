import { TestBed } from '@angular/core/testing';

import { BusineslocationService } from './busineslocation.service';

describe('BusineslocationService', () => {
  let service: BusineslocationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BusineslocationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
