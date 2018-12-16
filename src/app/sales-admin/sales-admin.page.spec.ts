import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SalesAdminPage } from './sales-admin.page';

describe('SalesAdminPage', () => {
  let component: SalesAdminPage;
  let fixture: ComponentFixture<SalesAdminPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SalesAdminPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SalesAdminPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
