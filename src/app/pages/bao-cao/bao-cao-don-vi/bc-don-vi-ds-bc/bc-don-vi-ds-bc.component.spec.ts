import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BcDonViDsBcComponent } from './bc-don-vi-ds-bc.component';

describe('BcDonViDsBcComponent', () => {
  let component: BcDonViDsBcComponent;
  let fixture: ComponentFixture<BcDonViDsBcComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BcDonViDsBcComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BcDonViDsBcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
