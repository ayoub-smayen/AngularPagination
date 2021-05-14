import { TestBed } from '@angular/core/testing';

import { ProductExcelService } from './product-excel.service';

describe('ProductExcelService', () => {
  let service: ProductExcelService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProductExcelService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
