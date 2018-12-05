import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReligiousPage } from './religious.page';

describe('ReligiousPage', () => {
  let component: ReligiousPage;
  let fixture: ComponentFixture<ReligiousPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReligiousPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReligiousPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
