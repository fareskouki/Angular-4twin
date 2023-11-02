import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { product } from 'src/app/model/product';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor(private http: HttpClient) {}
  baseUrl = 'http://localhost:3000/products/';
  getProductList(): Observable<product[]> {
    return this.http.get<product[]>(this.baseUrl);
  }
  getProductById(id: any): Observable<product> {
    return this.http.get<product>(this.baseUrl + id);
  }
  deleteProduct(id:number):Observable<product>{
    return this.http.delete<product>(this.baseUrl+id);
  }
  createProduct(product:product):Observable<product>{
    return this.http.post<product>(this.baseUrl,product);
  }
  

  }
