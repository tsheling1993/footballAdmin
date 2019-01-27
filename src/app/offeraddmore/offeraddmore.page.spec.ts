import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OfferaddmorePage } from './offeraddmore.page';

describe('OfferaddmorePage', () => {
  let component: OfferaddmorePage;
  let fixture: ComponentFixture<OfferaddmorePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OfferaddmorePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OfferaddmorePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
