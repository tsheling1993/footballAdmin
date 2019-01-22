import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FootmatchaddmorePage } from './footmatchaddmore.page';

describe('FootmatchaddmorePage', () => {
  let component: FootmatchaddmorePage;
  let fixture: ComponentFixture<FootmatchaddmorePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FootmatchaddmorePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FootmatchaddmorePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
