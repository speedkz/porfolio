import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BaoCaoDonViComponent } from './bao-cao-don-vi/bao-cao-don-vi.component';
import { BaoCaoSoTaiChinhComponent } from './bao-cao-so-tai-chinh/bao-cao-so-tai-chinh.component';
import { BaoCaoTongHopComponent } from './bao-cao-tong-hop/bao-cao-tong-hop.component';

const routes: Routes = [
  { path: 'bao-cao-don-vi', component: BaoCaoDonViComponent },
  { path: 'bao-cao-tong-hop', component: BaoCaoTongHopComponent },
  { path: 'bao-cao-so-tai-chinh', component: BaoCaoSoTaiChinhComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BaoCaoRoutingModule { }
