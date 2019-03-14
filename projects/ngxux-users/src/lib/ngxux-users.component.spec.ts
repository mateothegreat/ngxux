import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxuxUsersComponent } from './ngxux-users.component';

describe('NgxuxUsersComponent', () => {
  let component: NgxuxUsersComponent;
  let fixture: ComponentFixture<NgxuxUsersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgxuxUsersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxuxUsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
