import { TestBed } from '@angular/core/testing';

import { ServicesModelsCodificationServicesservicesService } from './services-models-codification-servicesservices.service';

describe('ServicesModelsCodificationServicesservicesService', () => {
  let service: ServicesModelsCodificationServicesservicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServicesModelsCodificationServicesservicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
