import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DefaultExploreLayout } from './default-explore-layout';

describe('DefaultExploreLayout', () => {
  let component: DefaultExploreLayout;
  let fixture: ComponentFixture<DefaultExploreLayout>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DefaultExploreLayout]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DefaultExploreLayout);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
