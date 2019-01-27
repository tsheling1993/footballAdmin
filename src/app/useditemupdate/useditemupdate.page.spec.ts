import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UseditemupdatePage } from './useditemupdate.page';

describe('UseditemupdatePage', () => {
  let component: UseditemupdatePage;
  let fixture: ComponentFixture<UseditemupdatePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UseditemupdatePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UseditemupdatePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
