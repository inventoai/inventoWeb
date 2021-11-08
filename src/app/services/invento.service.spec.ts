import { TestBed } from '@angular/core/testing';

import { InventoService } from './invento.service';

describe('InventoService', () => {
  let service: InventoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InventoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
