import { Component } from '@angular/core';
import { ProductService } from '../../service/product.service';
import { product } from 'src/app/model/product';

@Component({
  selector: 'app-show-product',
  templateUrl: './show-product.component.html',
})
export class ShowProductComponent {
  constructor(private service:ProductService){
  }
  product!:product[];//hethi bech najmou nest3mlou e (d) 5atr feha data mais locallement ya3refha e d mich fi b9eyt el projet
  Id:any;
    ngOnInit(): void {
      this.service.getProductList().subscribe(
        (data)=>{
          console.log(data);
          this.product=data;
        }
      );
    
    }
}
