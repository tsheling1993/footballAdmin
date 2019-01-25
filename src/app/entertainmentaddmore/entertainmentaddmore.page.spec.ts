import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EntertainmentaddmorePage } from './entertainmentaddmore.page';

describe('EntertainmentaddmorePage', () => {
  let component: EntertainmentaddmorePage;
  let fixture: ComponentFixture<EntertainmentaddmorePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EntertainmentaddmorePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EntertainmentaddmorePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
