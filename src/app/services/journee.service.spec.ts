import { TestBed } from '@angular/core/testing';

import { JourneeService } from './journee.service';

describe('JourneesService', () => {
  let service: JourneeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(JourneeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
