import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { DetailUserComponent } from '../detail-user/detail-user.component';
import { ShowUsersComponent } from '../show-users/show-users.component';
import { AddUserComponent } from '../add-user/add-user.component';
import { UpdateUserComponent } from '../update-user/update-user.component';
import { DeleteUserComponent } from '../delete-user/delete-user.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    DetailUserComponent,
    ShowUsersComponent,
    AddUserComponent,
    UpdateUserComponent,
    DeleteUserComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    FormsModule
  ]
})
export class AuthModule { }
