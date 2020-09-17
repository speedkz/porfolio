import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BaoCaoTongHopMyReportComponent } from './bao-cao-tong-hop-my-report.component';

describe('BaoCaoTongHopMyReportComponent', () => {
  let component: BaoCaoTongHopMyReportComponent;
  let fixture: ComponentFixture<BaoCaoTongHopMyReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BaoCaoTongHopMyReportComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BaoCaoTongHopMyReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
