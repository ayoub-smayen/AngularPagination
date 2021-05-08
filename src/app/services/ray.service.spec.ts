import { TestBed } from '@angular/core/testing';

import { RayService } from './ray.service';

describe('RayService', () => {
  let service: RayService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RayService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
