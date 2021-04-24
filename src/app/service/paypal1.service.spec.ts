import { TestBed } from '@angular/core/testing';

import { Paypal1Service } from './paypal1.service';

describe('Paypal1Service', () => {
  let service: Paypal1Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Paypal1Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
