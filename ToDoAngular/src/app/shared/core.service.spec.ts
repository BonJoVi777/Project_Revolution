import { TestBed } from '@angular/core/testing';

import { CoreService } from './core.service';

describe('TaskDetailService', () => {
  let service: CoreService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CoreService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
