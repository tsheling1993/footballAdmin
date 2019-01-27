import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OfferupdatePage } from './offerupdate.page';

describe('OfferupdatePage', () => {
  let component: OfferupdatePage;
  let fixture: ComponentFixture<OfferupdatePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OfferupdatePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OfferupdatePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
