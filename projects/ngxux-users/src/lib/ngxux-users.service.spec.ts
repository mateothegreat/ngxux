import { TestBed } from '@angular/core/testing';

import { NgxuxUsersService } from './ngxux-users.service';

describe('NgxuxUsersService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NgxuxUsersService = TestBed.get(NgxuxUsersService);
    expect(service).toBeTruthy();
  });
});
