import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BcDonViBsVuotCapComponent } from './bc-don-vi-bs-vuot-cap.component';

describe('BcDonViBsVuotCapComponent', () => {
  let component: BcDonViBsVuotCapComponent;
  let fixture: ComponentFixture<BcDonViBsVuotCapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BcDonViBsVuotCapComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BcDonViBsVuotCapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
