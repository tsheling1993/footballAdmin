import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieaddmorePage } from './movieaddmore.page';

describe('MovieaddmorePage', () => {
  let component: MovieaddmorePage;
  let fixture: ComponentFixture<MovieaddmorePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MovieaddmorePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MovieaddmorePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
