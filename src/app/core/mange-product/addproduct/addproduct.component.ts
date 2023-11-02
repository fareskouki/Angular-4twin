import { Component } from '@angular/core';
import { product } from 'src/app/model/product';
import { ProductService } from '../service/product.service';


@Component({
  selector: 'app-addproduct',
  templateUrl: './addproduct.component.html',
  styleUrls: ['./addproduct.component.css']
})
export class AddproductComponent {
  constructor(private productservice: ProductService) { }
  product = new product();
  showForm(f: any) {
    console.log(f)
  }
  saveProduct(p: product) {
    //add product
    this.productservice.createProduct(p).subscribe(
      () => {
        alert('added');
      }
    );
  }


}
