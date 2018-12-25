import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieadminPage } from './movieadmin.page';

describe('MovieadminPage', () => {
  let component: MovieadminPage;
  let fixture: ComponentFixture<MovieadminPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MovieadminPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MovieadminPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
