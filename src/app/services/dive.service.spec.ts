import { TestBed } from '@angular/core/testing';

import { DiveService } from './dive.service';

describe('DiveService', () => {
  let service: DiveService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DiveService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
