import { TestBed } from '@angular/core/testing';

import { FireUserService } from './fire-user.service';

describe('FireUserService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FireUserService = TestBed.get(FireUserService);
    expect(service).toBeTruthy();
  });
});
