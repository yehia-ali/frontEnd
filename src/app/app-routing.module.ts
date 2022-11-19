import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './component/not-found/not-found.component';
import { LoginComponent } from './pages/login/login.component';
import { ProductInfoComponent } from './pages/product-info/product-info.component';
import { ProductsComponent } from './pages/products/products.component';
import { AuthGuardService } from './services/auth-guard.service';

const routes: Routes = [
  // { path: '', component: ProductsComponent, canActivate: [AuthGuardService] ,data: {title: 'Products'} },
  { path: '', component: ProductsComponent, data: {title: 'Products'} },
  { path: 'product', component: ProductsComponent, data: {title: 'Products'} },
  { path: 'product/:id', component: ProductInfoComponent,data: {title: 'Product' }},
  { path: 'login', component: LoginComponent,data: {title: 'login' }},
  // { path: '**', component:NotFoundComponent,data: {title: 'Not Found' } }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
