import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PollRoutingModule } from './poll-routing.module';
import { AddpollComponent } from './addpoll/addpoll.component';
import { AdminstrationComponent } from './adminstration/adminstration.component';
import { FooterComponent } from './footer/footer.component';
import { LoginComponent } from './login/login.component';
import { MypollsComponent } from './mypolls/mypolls.component';
import { NavbarComponent } from './navbar/navbar.component';
import { OpollComponent } from './opoll/opoll.component';
import { PollsmallComponent } from './pollsmall/pollsmall.component';
import { RegisterComponent } from './register/register.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { PollsComponent } from '../admin1/polls/polls.component';
import { UsersComponent } from '../admin1/users/users.component';
import { HttpClientModule } from '@angular/common/http';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { FlashMessagesModule } from 'angular2-flash-messages';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgxChartsModule } from '@swimlane/ngx-charts';


import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AuthGuard } from '../guards/auth.guard';
import { AdminGuard } from '../guards/admin.guard';

import { AuthService } from '../services/auth.service';
import { PollService } from '../services/poll.service';


@NgModule({
  declarations: [AddpollComponent, AdminstrationComponent, FooterComponent, LoginComponent, MypollsComponent, NavbarComponent, OpollComponent, PollsmallComponent, RegisterComponent, WelcomeComponent, PollsComponent, UsersComponent],
  imports: [
    CommonModule,
    PollRoutingModule,
    NgxDatatableModule,
    FlashMessagesModule.forRoot(),
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    BrowserModule,
    NgxChartsModule

  ],
  exports: [
    /*CommonModule,
    PollRoutingModule,
    NgxDatatableModule,
    //FlashMessagesModule.forRoot(),
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    BrowserModule,
    NgxChartsModule*/
    AddpollComponent, AdminstrationComponent, FooterComponent, LoginComponent, MypollsComponent, NavbarComponent, OpollComponent, PollsmallComponent, RegisterComponent, WelcomeComponent, PollsComponent, UsersComponent
    
  ],
  providers:[
    AuthService,
    PollService,
    AuthGuard,
    AdminGuard
  ]
})
export class PollModule { }
