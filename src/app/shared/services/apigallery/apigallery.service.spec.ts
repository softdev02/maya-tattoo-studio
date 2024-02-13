import { TestBed } from '@angular/core/testing';

import { ApigalleryService } from './apigallery.service';

describe('ApigalleryService', () => {
  let service: ApigalleryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApigalleryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
