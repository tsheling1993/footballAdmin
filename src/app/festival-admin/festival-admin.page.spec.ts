import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FestivalAdminPage } from './festival-admin.page';

describe('FestivalAdminPage', () => {
  let component: FestivalAdminPage;
  let fixture: ComponentFixture<FestivalAdminPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FestivalAdminPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FestivalAdminPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
