import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularAriaComponent } from './angular-aria';

describe('AngularAriaComponent', () => {
  let component: AngularAriaComponent;
  let fixture: ComponentFixture<AngularAriaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AngularAriaComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AngularAriaComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
