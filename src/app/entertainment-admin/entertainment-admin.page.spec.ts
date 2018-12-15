import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EntertainmentAdminPage } from './entertainment-admin.page';

describe('EntertainmentAdminPage', () => {
  let component: EntertainmentAdminPage;
  let fixture: ComponentFixture<EntertainmentAdminPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EntertainmentAdminPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EntertainmentAdminPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
