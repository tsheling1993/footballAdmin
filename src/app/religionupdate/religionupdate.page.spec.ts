import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReligionupdatePage } from './religionupdate.page';

describe('ReligionupdatePage', () => {
  let component: ReligionupdatePage;
  let fixture: ComponentFixture<ReligionupdatePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReligionupdatePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReligionupdatePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
