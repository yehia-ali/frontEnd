import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-product-info',
  templateUrl: './product-info.component.html',
  styleUrls: ['./product-info.component.scss']
})
export class ProductInfoComponent implements OnInit {
  iconBack: string = '../../../assets/arrow-left.svg';
  ID: any;
  Product: any;
  constructor(
    private ActivatedRoute : ActivatedRoute,
    private ProductsService : ProductsService,
    private toastr: ToastrService
    ) { }

  ngOnInit(): void {
    this.ActivatedRoute.params.subscribe(params => {
      this.ProductsService.GetProductByID(params['id']).subscribe(res => {
        this.Product= res;
      })
    })
  }
  addtocart(item: any){
    this.ProductsService.AddtoCart(item);
    this.toastr.success('Product added to cart successfully');

  }
  removeItem(item: any){
    this.ProductsService.RemoveCartItem(item);
    this.toastr.success('Product Removed to cart successfully');
  }

}
