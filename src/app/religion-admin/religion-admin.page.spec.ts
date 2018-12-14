import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReligionAdminPage } from './religion-admin.page';

describe('ReligionAdminPage', () => {
  let component: ReligionAdminPage;
  let fixture: ComponentFixture<ReligionAdminPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReligionAdminPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReligionAdminPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
