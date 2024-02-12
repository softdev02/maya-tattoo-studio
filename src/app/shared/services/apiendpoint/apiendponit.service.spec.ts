import { TestBed } from '@angular/core/testing';

import { ApiendponitService } from './apiendponit.service';

describe('ApiendponitService', () => {
  let service: ApiendponitService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiendponitService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
