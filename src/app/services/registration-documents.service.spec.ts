import { TestBed } from '@angular/core/testing';

import { RegistrationDocumentsService } from './registration-documents.service';

describe('RegistrationDocumentsService', () => {
  let service: RegistrationDocumentsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RegistrationDocumentsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
