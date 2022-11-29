import { TestBed } from '@angular/core/testing';

import { PsersonService } from './pserson.service';

describe('PsersonService', () => {
  let service: PsersonService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PsersonService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
