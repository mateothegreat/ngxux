import { TestBed } from '@angular/core/testing';

import { NguxAdminUsersMgmtService } from './ngux-admin-users-mgmt.service';

describe('NguxAdminUsersMgmtService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NguxAdminUsersMgmtService = TestBed.get(NguxAdminUsersMgmtService);
    expect(service).toBeTruthy();
  });
});
