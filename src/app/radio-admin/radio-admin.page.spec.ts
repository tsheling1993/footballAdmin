import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RadioAdminPage } from './radio-admin.page';

describe('RadioAdminPage', () => {
  let component: RadioAdminPage;
  let fixture: ComponentFixture<RadioAdminPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RadioAdminPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RadioAdminPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
