import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { product } from 'src/app/model/product';
import { ProductService } from '../../service/product.service';

@Component({
  selector: 'app-detail-product',
  templateUrl: './detail-product.component.html',
})
export class DetailProductComponent implements OnInit {
  id:any;
  product=new product();
  
    constructor(private activatedroute: ActivatedRoute, private service:ProductService) { }//actviated route pour recupére l'id de url avec snapshopt
  
    ngOnInit(): void {
      this.id=this.activatedroute.snapshot.params['id'];
      this.service.getProductById(this.id).subscribe(
        (data)=>{
          this.product=data;
          console.log(data)
        }
      )

    }

}
