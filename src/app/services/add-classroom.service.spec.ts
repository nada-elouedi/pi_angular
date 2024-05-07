import { TestBed } from '@angular/core/testing';

import { AddClassroomService } from './add-classroom.service';

describe('AddClassroomService', () => {
  let service: AddClassroomService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AddClassroomService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
