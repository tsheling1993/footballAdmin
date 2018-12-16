import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrackcitybusPage } from './trackcitybus.page';

describe('TrackcitybusPage', () => {
  let component: TrackcitybusPage;
  let fixture: ComponentFixture<TrackcitybusPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrackcitybusPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrackcitybusPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
