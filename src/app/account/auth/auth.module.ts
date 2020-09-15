import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { UIModule } from '../../shared/ui/ui.module';

import { AuthRoutingModule } from './auth-routing.module';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    UIModule,
    AuthRoutingModule
  ]
})
export class AuthModule { }
