import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EntertainmentupdatePage } from './entertainmentupdate.page';

describe('EntertainmentupdatePage', () => {
  let component: EntertainmentupdatePage;
  let fixture: ComponentFixture<EntertainmentupdatePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EntertainmentupdatePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EntertainmentupdatePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
