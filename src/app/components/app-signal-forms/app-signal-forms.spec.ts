import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppSignalForms } from './app-signal-forms';

describe('AppSignalForms', () => {
  let component: AppSignalForms;
  let fixture: ComponentFixture<AppSignalForms>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppSignalForms]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AppSignalForms);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
