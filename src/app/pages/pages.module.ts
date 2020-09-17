import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UIModule } from 'app/shared/ui/ui.module';
import { UsersModule } from './users/users.module';


@NgModule({
  declarations: [DashboardComponent],
  imports: [
    CommonModule,
    UIModule,
    PagesRoutingModule,
    UsersModule
  ]
})
export class PagesModule { }
