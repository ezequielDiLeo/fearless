import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Giftcard } from './giftcard';

describe('Giftcard', () => {
  let component: Giftcard;
  let fixture: ComponentFixture<Giftcard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Giftcard]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Giftcard);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
