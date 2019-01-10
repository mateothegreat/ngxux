import { TestBed } from '@angular/core/testing';

import { NgxuxMatLoginService } from './ngxux-mat-login.service';

describe('NgxuxMatLoginService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NgxuxMatLoginService = TestBed.get(NgxuxMatLoginService);
    expect(service).toBeTruthy();
  });
});
