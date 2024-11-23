import { TestBed } from '@angular/core/testing';

import { ApiseriviceEventService } from './apiserivice-event.service';

describe('ApiseriviceEventService', () => {
  let service: ApiseriviceEventService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiseriviceEventService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});