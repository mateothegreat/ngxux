import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxuxMatLoginComponent } from './ngxux-mat-login.component';

describe('NgxuxMatLoginComponent', () => {
  let component: NgxuxMatLoginComponent;
  let fixture: ComponentFixture<NgxuxMatLoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgxuxMatLoginComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxuxMatLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
