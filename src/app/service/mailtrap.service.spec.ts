import { TestBed } from '@angular/core/testing';

import { MailtrapService } from './mailtrap.service';

describe('MailtrapService', () => {
  let service: MailtrapService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MailtrapService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
