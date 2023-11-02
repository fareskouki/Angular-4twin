import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MangeProductRoutingModule } from './mange-product-routing.module';
import { AddproductComponent } from './addproduct/addproduct.component';
import { DeleteProductComponent } from './deleteproduct/delete-product/delete-product.component';
import { DetailProductComponent } from './detailproduct/detail-product/detail-product.component';
import { ShowProductComponent } from './showproduct/show-product/show-product.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AddproductComponent,
    DeleteProductComponent,
    DetailProductComponent,
    ShowProductComponent
  ],
  imports: [
    CommonModule,
    MangeProductRoutingModule,
    FormsModule
  ]
})
export class MangeProductModule { }
