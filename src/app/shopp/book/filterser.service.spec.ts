import { TestBed } from '@angular/core/testing';

import { FilterserService } from './filterser.service';

describe('FilterserService', () => {
  let service: FilterserService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FilterserService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
