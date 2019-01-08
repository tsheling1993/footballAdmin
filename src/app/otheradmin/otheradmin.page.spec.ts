import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OtheradminPage } from './otheradmin.page';

describe('OtheradminPage', () => {
  let component: OtheradminPage;
  let fixture: ComponentFixture<OtheradminPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OtheradminPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OtheradminPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
