import { TestBed } from '@angular/core/testing';

import { ProfitserviceService } from './profitservice.service';

describe('ProfitserviceService', () => {
  let service: ProfitserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProfitserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
