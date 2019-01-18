import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MatchupdatePage } from './matchupdate.page';

describe('MatchupdatePage', () => {
  let component: MatchupdatePage;
  let fixture: ComponentFixture<MatchupdatePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MatchupdatePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MatchupdatePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
