import { TestBed } from '@angular/core/testing';

import { ComnemtserviceService } from './comnemtservice.service';

describe('ComnemtserviceService', () => {
  let service: ComnemtserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ComnemtserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
