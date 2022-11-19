import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Products } from 'src/app/models/products';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent implements OnInit {
  @Input() product!:Products;
  // @Output() productData = new EventEmitter(); 

  constructor() { }

  ngOnInit(): void {
  }
}
