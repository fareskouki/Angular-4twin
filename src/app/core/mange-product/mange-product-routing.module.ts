import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShowProductComponent } from './showproduct/show-product/show-product.component';
import { AddproductComponent } from './addproduct/addproduct.component';
import { DetailProductComponent } from './detailproduct/detail-product/detail-product.component';
import { DeleteProductComponent } from './deleteproduct/delete-product/delete-product.component';


const routes: Routes = [
{path:'product',component:ShowProductComponent, children:[
  {path:'add',component:AddproductComponent},
  {path:'detail',component:DetailProductComponent},
  {path:'delete',component:DeleteProductComponent},
]}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MangeProductRoutingModule { }
