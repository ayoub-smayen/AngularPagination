import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Eyaadmin1RoutingModule } from './eyaadmin1-routing.module';
import { BestproductComponent } from './bestproduct/bestproduct.component';
import { ChartComponent } from './chart/chart.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { Dice2Component } from './dice2/dice2.component';
import { EuserComponent } from './euser/euser.component';
import { ExcelComponent } from './excel/excel.component';
import { Profit1Component } from './profit1/profit1.component';
import { WeatherComponent } from './weather/weather.component';
import { ProfitmonthComponent } from './profitmonth/profitmonth.component';
import { SearchComponent } from './search/search.component';
import { UpdateUserComponent } from './update-user/update-user.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [BestproductComponent, ChartComponent, DashboardComponent, Dice2Component, EuserComponent, ExcelComponent, Profit1Component, WeatherComponent, ProfitmonthComponent, SearchComponent, UpdateUserComponent],
  imports: [
    CommonModule,
    Eyaadmin1RoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule
  ]

  , 
  exports :  [BestproductComponent, ChartComponent, DashboardComponent, Dice2Component, EuserComponent, ExcelComponent, Profit1Component, WeatherComponent, ProfitmonthComponent, SearchComponent, UpdateUserComponent]

})
export class Eyaadmin1Module { }
