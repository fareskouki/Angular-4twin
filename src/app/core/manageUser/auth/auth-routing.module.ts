import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShowUsersComponent } from '../show-users/show-users.component';
import { AddUserComponent } from '../add-user/add-user.component';
import { DetailUserComponent } from '../detail-user/detail-user.component';
import { DeleteUserComponent } from '../delete-user/delete-user.component';
import { UpdateUserComponent } from '../update-user/update-user.component';

const routes: Routes = [

  {path:'user', component:ShowUsersComponent, children:[
    {path:'add', component:AddUserComponent},
    {path:'detail/:id', component:DetailUserComponent},
    {path:'delete/:id', component:DeleteUserComponent},
    {path:'update/:id', component:UpdateUserComponent},
  ]},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
