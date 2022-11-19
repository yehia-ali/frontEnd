import { Injectable } from '@angular/core';
import {HttpClient} from'@angular/common/http';
import { BehaviorSubject } from 'rxjs';
import { Products } from '../models/products';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  cartItemList : any =[]
  productList = new BehaviorSubject<any>([]);

  constructor(private http : HttpClient) { }
  GetAllProducts(){
    return this.http.get("https://fakestoreapi.com/products");
  }
  GetProductByID(id: any){
    return this.http.get(`https://fakestoreapi.com/products/${id}`);
  }
  GetAllCategories(){
    return this.http.get("https://fakestoreapi.com/products/categories");
  }
  GetCategoryByName(CatNamr: any){
    return this.http.get(`https://fakestoreapi.com/products/category/${CatNamr}`);
  }


  getAllCountInCart(){
    return this.productList.asObservable();
  }
  AddtoCart(product : any){
    this.cartItemList.push(product);
    this.productList.next(this.cartItemList);
  }
  RemoveCartItem(product: any){
    if(product)
    this.cartItemList.pop();
    this.productList.next(this.cartItemList);
  }

  searchProduct() {
    return this.http.get<Products[]>(
      `https://fakestoreapi.com/products`
    );
  }

}
