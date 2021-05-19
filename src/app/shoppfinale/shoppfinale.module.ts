import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { ShoppfinaleRoutingModule } from './shoppfinale-routing.module';
import { AboutpageComponent } from './aboutpage/aboutpage.component';
import { BrandpageComponent } from './brandpage/brandpage.component';
import { ContactpageComponent } from './contactpage/contactpage.component';
import { FinalhomepageComponent } from './finalhomepage/finalhomepage.component';
import { SpecialhomepageComponent } from './specialhomepage/specialhomepage.component';
import { NavbarthomepageComponent } from './navbarthomepage/navbarthomepage.component';
import { FooterfhomepageComponent } from './footerfhomepage/footerfhomepage.component';
import { ClientpageComponent } from './clientpage/clientpage.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProfilefhomepageComponent } from './profilefhomepage/profilefhomepage.component';
import { FavouritefhomepageComponent } from './favouritefhomepage/favouritefhomepage.component';
import { WishlistfhomepageComponent } from './wishlistfhomepage/wishlistfhomepage.component';
import { ButtonsModule } from '@progress/kendo-angular-buttons';
import { WindowModule } from '@progress/kendo-angular-dialog';
import { NgxPaginationModule } from 'ngx-pagination';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { ProddetailspageComponent } from './proddetailspage/proddetailspage.component';
import { Forumspage1Component } from './forumspage1/forumspage1.component';
import { Wishlistspage1Component } from './wishlistspage1/wishlistspage1.component';
import { ShoppModule } from "../shopp/shopp.module";
import { SortableModule } from '@progress/kendo-angular-sortable';
import { DialogsModule } from "@progress/kendo-angular-dialog";
import { Prodfilkpage1Component } from './prodfilkpage1/prodfilkpage1.component';
import { PdfViewerModule } from 'ng2-pdf-viewer';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { FlashMessagesModule } from 'angular2-flash-messages';
import { CartprodpageComponent } from './cartprodpage/cartprodpage.component';
import { Mytemplate1pageComponent } from './mytemplate1page/mytemplate1page.component';
import { NgAisModule } from 'angular-instantsearch';
import { DelivhomeComponent } from './delivhome/delivhome.component';
import { MapspageComponent } from './mapspage/mapspage.component';
import { DelivprofilepageComponent } from './delivprofilepage/delivprofilepage.component';
import { DelivdisplaysearchComponent } from './delivdisplaysearch/delivdisplaysearch.component';

import { AgmCoreModule } from '@agm/core';
//import { ChatMsg } from 'angular-ai-chat-bot';
@NgModule({
  declarations: [AboutpageComponent, BrandpageComponent, ContactpageComponent, FinalhomepageComponent, SpecialhomepageComponent, NavbarthomepageComponent, FooterfhomepageComponent, ClientpageComponent, ProfilefhomepageComponent, FavouritefhomepageComponent, WishlistfhomepageComponent, ProddetailspageComponent, Forumspage1Component, Wishlistspage1Component, Prodfilkpage1Component, CartprodpageComponent, Mytemplate1pageComponent, DelivhomeComponent, MapspageComponent, DelivprofilepageComponent, DelivdisplaysearchComponent],
  imports: [
    CommonModule,
   // BrowserAnimationsModule,
   // BrowserModule,
   AgmCoreModule.forRoot({
    apiKey: 'AIzaSyAzg5wkctVR2STruMDMd-GgQqIz_UnVZMc'
  }),
    DialogsModule,
    PdfViewerModule,
    NgAisModule.forRoot(),
    NgAisModule,
    SortableModule,
    ShoppfinaleRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    ShoppModule,
    FormsModule,
    ButtonsModule,
    Ng2SearchPipeModule,
    WindowModule,
    NgxPaginationModule,
    NgxDatatableModule,
    FlashMessagesModule.forRoot(),
  ]

  , 
bootstrap:[ClientpageComponent]
  ,
/*
  exports :[
    AboutpageComponent, BrandpageComponent, ContactpageComponent, FinalhomepageComponent, SpecialhomepageComponent, NavbarthomepageComponent, FooterfhomepageComponent, ClientpageComponent,
  ,  ProfilefhomepageComponent, FavouritefhomepageComponent, WishlistfhomepageComponent],*/
})
export class ShoppfinaleModule { }
