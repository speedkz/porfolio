import { StoreModule } from '@ngrx/store';
import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';

import { reducers } from './reducers';
import { effects } from 'app/store/account/effects';

@NgModule({
  imports: [
    StoreModule.forFeature('account', reducers),
    EffectsModule.forFeature(effects)
  ],
  providers: []
})
export class AccountStoreModule {
}
