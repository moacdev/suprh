import { TestBed } from '@angular/core/testing';

import { SidenavItemService } from './sidenav-item.service';

describe('SidenavItemService', () => {
  let service: SidenavItemService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SidenavItemService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
