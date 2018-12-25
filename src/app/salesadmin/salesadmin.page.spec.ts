import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SalesadminPage } from './salesadmin.page';

describe('SalesadminPage', () => {
  let component: SalesadminPage;
  let fixture: ComponentFixture<SalesadminPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SalesadminPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SalesadminPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
