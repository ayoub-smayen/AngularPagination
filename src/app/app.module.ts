import { BrowserModule } from '@angular/platform-browser';
import { Component, NgModule } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
//////
import { EuserserviceService } from './services/euserservice.service';
//////
import { FormsModule } from '@angular/forms';
import { EuserComponent } from './euser/euser.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProfitComponent } from './profit/profit.component';
import { DashboardserviceService } from './services/dashboardservice.service';
import { ProfitserviceService } from './services/profitservice.service';
import { SearchComponent } from './search/search.component';

import { HomeComponent } from './home/home.component';
import { UpdateUserComponent } from './update-user/update-user.component';
import { DiceComponent } from './dice/dice.component';
import { Dice2Component } from './dice2/dice2.component';


@NgModule({
  declarations: [
    AppComponent,
    EuserComponent,
    DashboardComponent,
    ProfitComponent,
    SearchComponent,
    HomeComponent,
    UpdateUserComponent,
    DiceComponent,
    Dice2Component,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    
   
    
  ],
  providers: [EuserserviceService,DashboardserviceService,ProfitserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
