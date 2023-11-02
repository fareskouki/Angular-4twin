import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { product } from 'src/app/model/product';
import { ProductService } from '../../service/product.service';

@Component({
  selector: 'app-delete-product',
  templateUrl: './delete-product.component.html',
})
export class DeleteProductComponent {
  constructor(private product:ProductService,private ActivatedRouter:ActivatedRoute,private router:Router) {}
  ngOnInit(){
    this.product.deleteProduct(this.ActivatedRouter.snapshot.params['id']).subscribe(
      (success)=>{//this block is called next we use it in subscribe(success)
        alert("deleted")
        this.router.navigate(['product']);
      },
      (err)=>{let status=err.status;//this block is called error we use it in subscribe
        switch(status){
          case 404:alert("Product not found");
          break;
          case 500:alert("Internal Server Error");
          break;  
          default:alert("Error");
        }
        }
    )
  }

}
