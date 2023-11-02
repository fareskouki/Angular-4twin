import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListUserComponent } from './list-user/list-user.component';
import { FirstComponent } from './first/first.component';
import { NotfoundComponent } from './shared/notfound/notfound.component';
import { LoginComponent } from './core/manageUser/login/login.component';
import { ShowUsersComponent } from './core/manageUser/show-users/show-users.component';
import { DetailUserComponent } from './core/manageUser/detail-user/detail-user.component';
import { DeleteUserComponent } from './core/manageUser/delete-user/delete-user.component';
import { ShowProductComponent } from './core/mange-product/showproduct/show-product/show-product.component';
import { DetailProductComponent } from './core/mange-product/detailproduct/detail-product/detail-product.component';
import { DeleteProductComponent } from './core/mange-product/deleteproduct/delete-product/delete-product.component';

const routes: Routes = [
 // {path:'',redirectTo:'login',pathMatch:'full'},
 {path:'login',component:LoginComponent},
  {path:'test',component:ListUserComponent},
  {path:'first', component:FirstComponent},
  
  {path:'p',loadChildren:()=>import('../app/core/manageUser/auth/auth.module').then((t)=>t.AuthModule)},
  {path:'users',component:ShowUsersComponent},
  {path:'users/:id',component:DetailUserComponent},
  {path:'userremove/:id',component:DeleteUserComponent},
  {path:'u',loadChildren:()=>import('../app/core/mange-product/mange-product.module').then((x)=>x.MangeProductModule)},
  {path:'product',component:ShowProductComponent},
  {path:'product/:id',component:DetailProductComponent},
  {path:'productremove/:id',component:DeleteProductComponent},
  {path:'**',component:NotfoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
