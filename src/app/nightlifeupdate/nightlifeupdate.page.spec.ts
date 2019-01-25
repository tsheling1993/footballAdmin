import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NightlifeupdatePage } from './nightlifeupdate.page';

describe('NightlifeupdatePage', () => {
  let component: NightlifeupdatePage;
  let fixture: ComponentFixture<NightlifeupdatePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NightlifeupdatePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NightlifeupdatePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
