import { BrowserModule } from '@angular/platform-browser';
import { Component, NgModule } from '@angular/core';

import { HttpClientJsonpModule, HttpClientModule } from '@angular/common/http';
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
import { ProfitpermonthComponent } from './profitpermonth/profitpermonth.component';
import { CommonModule } from '@angular/common';
import { GeneralstatisticComponent } from './generalstatistic/generalstatistic.component';
import { WeatherComponent } from './weather/weather.component';
import { FahrenheitPipe } from './fahrenheit.pipe';
import { MomentPipe } from './moment.pipe';
import { AgmCoreModule } from '@agm/core';
import { NavbarComponent } from './navbar/navbar.component';

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
    ProfitpermonthComponent,
    GeneralstatisticComponent,
    WeatherComponent,
    FahrenheitPipe,
    MomentPipe,
    NavbarComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    HttpClientJsonpModule,
    CommonModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyBisa02R8waL7ork-VnYviBlydjeDdbB7A'
    })
    
   
    
  ],
  providers: [EuserserviceService,DashboardserviceService,ProfitserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
