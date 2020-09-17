import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BaoCaoSoTaiChinhYeuCauVuotCapComponent } from './bao-cao-so-tai-chinh-yeu-cau-vuot-cap.component';

describe('BaoCaoSoTaiChinhYeuCauVuotCapComponent', () => {
  let component: BaoCaoSoTaiChinhYeuCauVuotCapComponent;
  let fixture: ComponentFixture<BaoCaoSoTaiChinhYeuCauVuotCapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BaoCaoSoTaiChinhYeuCauVuotCapComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BaoCaoSoTaiChinhYeuCauVuotCapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
