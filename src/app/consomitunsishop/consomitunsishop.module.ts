import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ConsomitunsishopRoutingModule } from './consomitunsishop-routing.module';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from './navbar/navbar.component';
import { StoreComponent } from './store/store.component';
import { ProductsComponent } from './products/products.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { BlankComponent } from './blank/blank.component';
import { CartComponent } from './cart/cart.component';
import { WishlistComponent } from './wishlist/wishlist.component';
import { HomestoreComponent } from './homestore/homestore.component';
import { BreadcumbComponent } from './breadcumb/breadcumb.component';
import { HttpClientModule } from '@angular/common/http';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import {  FormsModule} from "@angular/forms";
import { ForumsComponent } from './forums/forums.component';
import { SproductiveComponent } from './sproductive/sproductive.component';
import { FavouriteComponent } from './favourite/favourite.component';
import { ProductexcelComponent } from './productexcel/productexcel.component';
import { ProdfilteringComponent } from './prodfiltering/prodfiltering.component';
import { RayComponent } from './ray/ray.component';
import { StockComponent } from './stock/stock.component';
import { ProductmnComponent } from './productmn/productmn.component';
@NgModule({
  declarations: [HeaderComponent, FooterComponent, NavbarComponent, StoreComponent, ProductsComponent, CheckoutComponent, BlankComponent, CartComponent, WishlistComponent, HomestoreComponent, BreadcumbComponent, ForumsComponent, SproductiveComponent, FavouriteComponent, ProductexcelComponent, ProdfilteringComponent, RayComponent, StockComponent, ProductmnComponent],
  imports: [
    CommonModule,
    ConsomitunsishopRoutingModule,
    HttpClientModule,
    Ng2SearchPipeModule,
    FormsModule
  ]
  ,

  exports : [ProductsComponent,
    NavbarComponent,
    ForumsComponent,
    HomestoreComponent],

    /*,HeaderComponent, FooterComponent, NavbarComponent, StoreComponent, ProductsComponent, CheckoutComponent, BlankComponent, CartComponent, WishlistComponent
  
  
  ]*/

  

  bootstrap:[ HomestoreComponent]


  
})
export class ConsomitunsishopModule { }
