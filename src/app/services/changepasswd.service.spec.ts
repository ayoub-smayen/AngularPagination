import { TestBed } from '@angular/core/testing';

import { ChangepasswdService } from './changepasswd.service';

describe('ChangepasswdService', () => {
  let service: ChangepasswdService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ChangepasswdService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
