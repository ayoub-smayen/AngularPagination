import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShoppRoutingModule } from './shopp-routing.module';
import { HomepageComponent } from './homepage/homepage.component';
import { HttpClientModule } from '@angular/common/http';
//import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SortableModule } from '@progress/kendo-angular-sortable';

import { MatToolbarModule } from "@angular/material/toolbar";
import { MatIconModule } from "@angular/material/icon";
import {  MatSidenavModule} from "@angular/material/sidenav";
import {  MatListModule} from "@angular/material/list";
import { MatButtonModule } from "@angular/material/button";
import { ShoppageComponent } from './shoppage/shoppage.component';
import { ClothespageComponent } from './clothespage/clothespage.component';
import { CompareprodspageComponent } from './compareprodspage/compareprodspage.component';
import { ChatshopComponent } from './chatshop/chatshop.component';
import { CommentforumComponent } from './commentforum/commentforum.component';
import { MessagedeliveryComponent } from './messagedelivery/messagedelivery.component';
import { BookComponent } from './book/book.component';
import {  FormsModule} from "@angular/forms";
import { FlashMessagesModule } from 'angular2-flash-messages';
import { EditprofileComponent } from './editprofile/editprofile.component';
import { ShopchattingComponent } from './shopchatting/shopchatting.component';
import { Rayon1Component } from './rayon1/rayon1.component';
import { Paypal1Component } from './paypal1/paypal1.component';
import { AuthService } from ".././auth.service";
import { Cartshopping1Component } from './cartshopping1/cartshopping1.component';
import { WishlistshoppingComponent } from './wishlistshopping/wishlistshopping.component';
import { PublicationComponent } from './publication/publication.component';
import { ShopmenuComponent } from './shopmenu/shopmenu.component';
import { Shopnotif2Component } from './shopnotif2/shopnotif2.component';
import { PdfViewerModule } from 'ng2-pdf-viewer';
import { Template1Component } from './template1/template1.component';
import { Template2Component } from './template2/template2.component';
import { ShoppmapComponent } from './shoppmap/shoppmap.component';
//import { AgmCoreModule } from '@agm/core';
import { Shoppmap2Component } from './shoppmap2/shoppmap2.component';
import { ShopppublicityComponent } from './shopppublicity/shopppublicity.component';
import { AdsencesComponent } from './adsences/adsences.component';
import { ShopsettingsComponent } from './shopsettings/shopsettings.component';
//import { PushNotificationsModule } from 'ng-push';
import { ButtonsModule } from '@progress/kendo-angular-buttons';
import { WindowModule } from '@progress/kendo-angular-dialog';
import { NgxPaginationModule } from 'ngx-pagination';
import { ShoppslotmachineComponent } from './shoppslotmachine/shoppslotmachine.component';
import { SimulatorgameComponent } from './simulatorgame/simulatorgame.component';
import { NotificationModule } from '@progress/kendo-angular-notification';
import { MydiceComponent } from './mydice/mydice.component';
import { FilterprodPipe } from './book/filterprod.pipe';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { TrackingComponent } from './tracking/tracking.component';
import { Tracking2Component } from './tracking2/tracking2.component';
import { PayementshopComponent } from './payementshop/payementshop.component';
import { NgPaymentCardModule } from 'ng-payment-card';
import { ChildshopComponent } from './childshop/childshop.component';
import { Childshop2Component } from './childshop2/childshop2.component';
import { Chartshop0Component } from './chartshop0/chartshop0.component';
import { Chartshop1Component } from './chartshop1/chartshop1.component';
import { Chartshop2Component } from './chartshop2/chartshop2.component';

import { ChartsModule } from 'ng2-charts';
import { AddprodshoppComponent } from './addprodshopp/addprodshopp.component';
import { AddcatshoppComponent } from './addcatshopp/addcatshopp.component';
import { NotifshoppingComponent } from './notifshopping/notifshopping.component';
import { NotifchildComponent } from './notifchild/notifchild.component';
import { NotifpereComponent } from './notifpere/notifpere.component';
import { FiltershopComponent } from './filtershop/filtershop.component';
import { Filtershop2Component } from './filtershop2/filtershop2.component';
@NgModule({
  declarations: [HomepageComponent, ShoppageComponent, ClothespageComponent, CompareprodspageComponent, ChatshopComponent, CommentforumComponent, MessagedeliveryComponent, BookComponent, EditprofileComponent, ShopchattingComponent, Rayon1Component, Paypal1Component, Cartshopping1Component, WishlistshoppingComponent, PublicationComponent, ShopmenuComponent, Shopnotif2Component, Template1Component, Template2Component, ShoppmapComponent, Shoppmap2Component, ShopppublicityComponent, AdsencesComponent, ShopsettingsComponent, ShoppslotmachineComponent, SimulatorgameComponent, MydiceComponent, 
    
    
    FilterprodPipe, TrackingComponent, Tracking2Component, PayementshopComponent, ChildshopComponent, Childshop2Component, Chartshop0Component, Chartshop1Component, Chartshop2Component, AddprodshoppComponent, AddcatshoppComponent, NotifshoppingComponent, NotifchildComponent, NotifpereComponent, FiltershopComponent, Filtershop2Component
  ],
  imports: [
    CommonModule,
    /*AgmCoreModule.forRoot({
      apiKey: 'AIzaSyBwxHyA25RlKXpfM7jLjoPG4x2oyLPlCeU'
    }),*/
    HttpClientModule,
    ChartsModule,
    ShoppRoutingModule,
    NgxPaginationModule,
    NotificationModule,
    Ng2SearchPipeModule,
    NgPaymentCardModule,
   // PushNotificationsModule,
   // BrowserAnimationsModule,
   SortableModule,
   ButtonsModule,
   //FilterprodPipe,
   WindowModule,
    MatToolbarModule,
    MatSidenavModule,
    FormsModule,
    MatListModule,
    MatButtonModule,
    PdfViewerModule,
    MatIconModule,
    FlashMessagesModule.forRoot(),
  ],
  exports: [
    Shopnotif2Component,
    HomepageComponent, ShoppageComponent, ClothespageComponent, CompareprodspageComponent, ChatshopComponent,MessagedeliveryComponent,
    ShoppmapComponent,ShopppublicityComponent

    ,
    //FilterprodPipe
  ],

  bootstrap: [ 
    HomepageComponent,BookComponent
  ]
  //providers:[AuthService]
})
export class ShoppModule { }
