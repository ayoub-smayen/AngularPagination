import { TestBed } from '@angular/core/testing';

import { EuserService } from './euser.service';

describe('EuserService', () => {
  let service: EuserService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EuserService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
