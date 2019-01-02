import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RadioadminPage } from './radioadmin.page';

describe('RadioadminPage', () => {
  let component: RadioadminPage;
  let fixture: ComponentFixture<RadioadminPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RadioadminPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RadioadminPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
