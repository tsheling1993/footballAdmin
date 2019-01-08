import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NightlifeadminPage } from './nightlifeadmin.page';

describe('NightlifeadminPage', () => {
  let component: NightlifeadminPage;
  let fixture: ComponentFixture<NightlifeadminPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NightlifeadminPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NightlifeadminPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
