/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { PokerComponent } from './poker.component';

describe('PokerComponent', () => {
  let component: PokerComponent;
  let fixture: ComponentFixture<PokerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PokerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PokerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
