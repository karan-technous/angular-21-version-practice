import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppReacticeForms } from './app-reactice-forms';

describe('AppReacticeForms', () => {
  let component: AppReacticeForms;
  let fixture: ComponentFixture<AppReacticeForms>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppReacticeForms]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AppReacticeForms);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
