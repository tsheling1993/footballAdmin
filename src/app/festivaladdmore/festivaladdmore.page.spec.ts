import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FestivaladdmorePage } from './festivaladdmore.page';

describe('FestivaladdmorePage', () => {
  let component: FestivaladdmorePage;
  let fixture: ComponentFixture<FestivaladdmorePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FestivaladdmorePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FestivaladdmorePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
