import { Component, EventEmitter, OnInit, Output, } from '@angular/core';
import { Router } from '@angular/router';
import { Products } from 'src/app/models/products';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  iconLogo: string = '../../../assets/logo.svg';
  iconSearch: string = '../../../assets/search.svg';
  iconUser: string = '../../../assets/user.svg';
  totalItem : number = 0;
  searchResult:undefined|Products[];
  @Output() searchData = new EventEmitter<any>();

  constructor(
     private router: Router,
     private authenticationService: AuthenticationService,
     private ProductsService:ProductsService
    ) { }  
  ngOnInit() {  
    this.ProductsService.getAllCountInCart()
    .subscribe(res=>{
      this.totalItem = res.length;
    })
  }  
  logout() {  
    this.authenticationService.logout();  
    this.router.navigate(['login']);  
  }
  searchProduct(query:KeyboardEvent){
    debugger
    if(query){
      const element = query.target as HTMLInputElement;
      // element.value
      this.ProductsService.searchProduct().subscribe((result: any[])=>{
        this.searchResult=result.filter(item =>item.title.toLowerCase().includes(element.value.toLowerCase()));
        this.searchData.emit(this.searchResult)
      })
    }
  }
}
