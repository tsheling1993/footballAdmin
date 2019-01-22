import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Thromde2Page } from './thromde2.page';

describe('Thromde2Page', () => {
  let component: Thromde2Page;
  let fixture: ComponentFixture<Thromde2Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Thromde2Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Thromde2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
