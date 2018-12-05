import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MusicordancePage } from './musicordance.page';

describe('MusicordancePage', () => {
  let component: MusicordancePage;
  let fixture: ComponentFixture<MusicordancePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MusicordancePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MusicordancePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
