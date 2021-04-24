import { TestBed } from '@angular/core/testing';

import { AdsenceService } from './adsence.service';

describe('AdsenceService', () => {
  let service: AdsenceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AdsenceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
