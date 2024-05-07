import { TestBed } from '@angular/core/testing';

import { AddmeetingService } from './addmeeting.service';

describe('AddmeetingService', () => {
  let service: AddmeetingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AddmeetingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
