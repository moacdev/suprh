import { TestBed } from '@angular/core/testing';

import { CongesAbsencesService } from './conges-absences.service';

describe('CongesAbsencesService', () => {
  let service: CongesAbsencesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CongesAbsencesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
