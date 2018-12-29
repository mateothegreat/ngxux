import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NguxAdminUsersMgmtComponent } from './ngux-admin-users-mgmt.component';

describe('NguxAdminUsersMgmtComponent', () => {
  let component: NguxAdminUsersMgmtComponent;
  let fixture: ComponentFixture<NguxAdminUsersMgmtComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NguxAdminUsersMgmtComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NguxAdminUsersMgmtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
