import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BcDvMyReportComponent } from './bc-dv-my-report.component';

describe('BcDvMyReportComponent', () => {
  let component: BcDvMyReportComponent;
  let fixture: ComponentFixture<BcDvMyReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BcDvMyReportComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BcDvMyReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
