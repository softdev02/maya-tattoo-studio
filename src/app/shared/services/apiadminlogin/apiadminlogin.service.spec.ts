import { TestBed } from '@angular/core/testing';

import { ApiadminloginService } from './apiadminlogin.service';

describe('ApiadminloginService', () => {
  let service: ApiadminloginService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiadminloginService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
