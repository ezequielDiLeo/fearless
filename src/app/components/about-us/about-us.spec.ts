import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutUS } from './about-us';

describe('AboutUS', () => {
  let component: AboutUS;
  let fixture: ComponentFixture<AboutUS>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AboutUS]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AboutUS);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
