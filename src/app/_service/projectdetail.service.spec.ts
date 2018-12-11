import { TestBed } from '@angular/core/testing';

import { ProjectdetailService } from './projectdetail.service';

describe('ProjectdetailService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ProjectdetailService = TestBed.get(ProjectdetailService);
    expect(service).toBeTruthy();
  });
});
