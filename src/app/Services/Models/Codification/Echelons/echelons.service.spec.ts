import { TestBed } from '@angular/core/testing';

import { EchelonsService } from './echelons.service';

describe('EchelonsService', () => {
  let service: EchelonsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EchelonsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
