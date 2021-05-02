import { TestBed } from '@angular/core/testing';

import { EuserserviceService } from './euserservice.service';

describe('EuserserviceService', () => {
  let service: EuserserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EuserserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
