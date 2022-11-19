import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  isLoading = true;
  allProducts: any;
  allCategories: any;
  content: any;
  newArray: any;
  constructor(private route : Router , private ProductsService : ProductsService) { }
  ngOnInit(): void {
    this.getAllProducts();
    this.getAllCategories()
  }
  getAllProducts() {
    this.ProductsService.GetAllProducts().subscribe(
      (res)=>{
        this.isLoading = false;
        this.allProducts = res;
      }
    )
  }
  getProductInfo(Product: { id: any; }): void{
    this.ProductsService.GetProductByID(Product.id).subscribe((data)=>console.log(data));
    this.route.navigate([`product/${Product.id}`]);
  }
  getAllCategories() {
    this.ProductsService.GetAllCategories().subscribe(
      (res)=>{
        this.allCategories = res;
      }
    )
  }
  getProductByCategory(catName: any): void{
    debugger
      this.ProductsService.GetCategoryByName(catName).subscribe(
        (res)=>{
          this.allProducts = res;
          console.log(this.allProducts)
        }
      )
  }
  
  onCheckboxChange(e: any,catName: any) {
    debugger
    if (e.target.checked) {
      this.getProductByCategory(catName)
    }
    else 
      this.getAllProducts();
  }
  searchData(data: any) {
    debugger
    this.allProducts = data;
  }

}
