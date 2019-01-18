import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FootmatchadminPage } from './footmatchadmin.page';

describe('FootmatchadminPage', () => {
  let component: FootmatchadminPage;
  let fixture: ComponentFixture<FootmatchadminPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FootmatchadminPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FootmatchadminPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
