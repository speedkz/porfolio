import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BaoCaoRoutingModule } from './bao-cao-routing.module';
import { BaoCaoDonViComponent } from './bao-cao-don-vi/bao-cao-don-vi.component';
import { UIModule } from 'app/shared/ui/ui.module';
import { BaoCaoTongHopComponent } from './bao-cao-tong-hop/bao-cao-tong-hop.component';
import { BaoCaoTongHopMyReportComponent } from './bao-cao-tong-hop/bao-cao-tong-hop-my-report/bao-cao-tong-hop-my-report.component';
import { BaoCaoSoTaiChinhComponent } from './bao-cao-so-tai-chinh/bao-cao-so-tai-chinh.component';
import { BaoCaoSoTaiChinhDsBaoCaoComponent } from './bao-cao-so-tai-chinh/bao-cao-so-tai-chinh-ds-bao-cao/bao-cao-so-tai-chinh-ds-bao-cao.component';
import { BaoCaoSoTaiChinhBcVuotCapComponent } from './bao-cao-so-tai-chinh/bao-cao-so-tai-chinh-bc-vuot-cap/bao-cao-so-tai-chinh-bc-vuot-cap.component';
import { BaoCaoSoTaiChinhYeuCauVuotCapComponent } from './bao-cao-so-tai-chinh/bao-cao-so-tai-chinh-yeu-cau-vuot-cap/bao-cao-so-tai-chinh-yeu-cau-vuot-cap.component';
import { BcDonViDsBcComponent } from './bao-cao-don-vi/bc-don-vi-ds-bc/bc-don-vi-ds-bc.component';
import { BcDonViBsVuotCapComponent } from './bao-cao-don-vi/bc-don-vi-bs-vuot-cap/bc-don-vi-bs-vuot-cap.component';
import { BcDvMyReportComponent } from './bao-cao-don-vi/bc-dv-my-report/bc-dv-my-report.component';


@NgModule({
  declarations: [BaoCaoDonViComponent, BaoCaoTongHopComponent, BaoCaoTongHopMyReportComponent, BaoCaoSoTaiChinhComponent, BaoCaoSoTaiChinhDsBaoCaoComponent, BaoCaoSoTaiChinhBcVuotCapComponent, BaoCaoSoTaiChinhYeuCauVuotCapComponent, BcDonViDsBcComponent, BcDonViBsVuotCapComponent, BcDvMyReportComponent],
  imports: [
    CommonModule,
    UIModule,
    BaoCaoRoutingModule
  ]
})
export class BaoCaoModule { }
