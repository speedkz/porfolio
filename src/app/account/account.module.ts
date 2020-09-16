import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AccountRoutingModule } from './account-routing.module';
import { AccountStoreModule } from 'app/store/account/store.module';
import { UIModule } from 'app/shared/ui/ui.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    UIModule,
    AccountRoutingModule,
    AccountStoreModule
  ]
})
export class AccountModule { }
