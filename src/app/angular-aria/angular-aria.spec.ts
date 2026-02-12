import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularAria } from './angular-aria';

describe('AngularAria', () => {
  let component: AngularAria;
  let fixture: ComponentFixture<AngularAria>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AngularAria]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AngularAria);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
