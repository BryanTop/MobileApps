import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TableOfContentsPage } from './table-of-contents.page';

describe('TableOfContentsPage', () => {
  let component: TableOfContentsPage;
  let fixture: ComponentFixture<TableOfContentsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TableOfContentsPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TableOfContentsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
