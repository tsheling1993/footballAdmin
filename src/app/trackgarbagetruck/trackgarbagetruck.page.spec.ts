import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrackgarbagetruckPage } from './trackgarbagetruck.page';

describe('TrackgarbagetruckPage', () => {
  let component: TrackgarbagetruckPage;
  let fixture: ComponentFixture<TrackgarbagetruckPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrackgarbagetruckPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrackgarbagetruckPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
