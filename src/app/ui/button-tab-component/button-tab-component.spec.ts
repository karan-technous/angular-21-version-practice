import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonTabComponent } from './button-tab-component';

describe('ButtonTabComponent', () => {
  let component: ButtonTabComponent;
  let fixture: ComponentFixture<ButtonTabComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ButtonTabComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ButtonTabComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
