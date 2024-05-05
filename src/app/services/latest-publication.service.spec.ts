import { TestBed } from '@angular/core/testing';

import { LatestPublicationService } from './latest-publication.service';

describe('LatestPublicationService', () => {
  let service: LatestPublicationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LatestPublicationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
