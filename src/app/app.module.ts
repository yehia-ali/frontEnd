import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './component/header/header.component';
import { ProductsComponent } from './pages/products/products.component';
import { AuthenticationService } from './services/authentication.service';
import { LoginComponent } from './pages/login/login.component';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NotFoundComponent } from './component/not-found/not-found.component';
import { ProductCardComponent } from './component/product-card/product-card.component';
import { ProductInfoComponent } from './pages/product-info/product-info.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ProductCartComponent } from './component/product-cart/product-cart.component';
import { LoaderComponent } from './component/loader/loader.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ProductsComponent,
    LoginComponent,
    NotFoundComponent,
    ProductCardComponent,
    ProductInfoComponent,
    ProductCartComponent,
    LoaderComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule, // required animations module
    NgbModule,
    ToastrModule.forRoot(
      {
        timeOut: 1000,
        positionClass: 'toast-bottom-right',
        preventDuplicates: true,
      }
    ),
  ],
  providers: [ AuthenticationService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
