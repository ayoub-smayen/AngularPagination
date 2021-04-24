import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { HttpClientModule } from '@angular/common/http';


import { MatToolbarModule } from "@angular/material/toolbar";
import { MatIconModule } from "@angular/material/icon";
import {  MatSidenavModule} from "@angular/material/sidenav";
import {  MatListModule} from "@angular/material/list";
import { MatButtonModule } from "@angular/material/button";
import { ShoppModule } from "./shopp/shopp.module";
import { FlashMessagesModule } from 'angular2-flash-messages';
//import { PollModule } from "./poll/poll.module";
import { PollModule } from "./poll/poll.module";
import {  MyadminModule} from "./myadmin/myadmin.module";
import { DialogsModule } from '@progress/kendo-angular-dialog';
import { SortableModule } from '@progress/kendo-angular-sortable';
import { NotificationModule } from '@progress/kendo-angular-notification';



//import { PushNotificationsModule } from 'ng-push';
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    PollModule,
    ShoppModule,
  //  PushNotificationsModule,
    FlashMessagesModule.forRoot(),
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatButtonModule,
    MatIconModule,
    MyadminModule,
    DialogsModule,
    SortableModule,
    NotificationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
