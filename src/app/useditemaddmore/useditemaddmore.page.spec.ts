import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UseditemaddmorePage } from './useditemaddmore.page';

describe('UseditemaddmorePage', () => {
  let component: UseditemaddmorePage;
  let fixture: ComponentFixture<UseditemaddmorePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UseditemaddmorePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UseditemaddmorePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
