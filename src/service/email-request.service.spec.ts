import { TestBed } from '@angular/core/testing';

import { EmailRequestService } from '../service/email-request.service';

describe('EmailRequestService', () => {
  let service: EmailRequestService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EmailRequestService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
