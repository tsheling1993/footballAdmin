import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UseditemPage } from './useditem.page';

describe('UseditemPage', () => {
  let component: UseditemPage;
  let fixture: ComponentFixture<UseditemPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UseditemPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UseditemPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
