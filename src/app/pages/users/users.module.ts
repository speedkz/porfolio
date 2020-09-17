import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { UsersManagementComponent } from './users-management/users-management.component';
import { UIModule } from 'app/shared/ui/ui.module';
import { DialogCreateUserComponent } from './users-management/dialog-create-user/dialog-create-user.component';


@NgModule({
  declarations: [UsersManagementComponent, DialogCreateUserComponent],
  imports: [
    CommonModule,
    UsersRoutingModule,
    UIModule
  ]
})
export class UsersModule { }
