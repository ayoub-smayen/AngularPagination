import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EuserComponent } from './euser/euser.component';
import { HomeComponent } from './home/home.component';
import { SearchComponent } from './search/search.component';
import { DiceComponent } from './dice/dice.component';
import { UpdateUserComponent } from './update-user/update-user.component';
import { Dice2Component } from './dice2/dice2.component';

import { DashboardComponent } from './dashboard/dashboard.component';
import { ProfitpermonthComponent } from './profitpermonth/profitpermonth.component';
import { GeneralstatisticComponent } from './generalstatistic/generalstatistic.component';
import { NavbarComponent } from './navbar/navbar.component';
import { Home1Component } from './home1/home1.component';
import { Profit1Component } from './profit1/profit1.component';
import { BestproductComponent } from './bestproduct/bestproduct.component';
import { WeatherComponent } from './weather/weather.component';
import { ExcelComponent } from './excel/excel.component';
import { ChartComponent } from './chart/chart.component';
import { ViewsComponent } from './views/views.component';
const routes: Routes = [

{path:"home",component:HomeComponent},
{path:"home1",component:Home1Component},
{path:"euser",component:EuserComponent},
{path:"search",component:SearchComponent},
{path:"dashboard",component:DashboardComponent},
{path:"profit1",component:Profit1Component},
{path:"profitpermonth",component:ProfitpermonthComponent},
{path:"dice",component:DiceComponent},
{path:"dice2",component:Dice2Component},
{path:"generalstatistic",component:GeneralstatisticComponent},
{path:"navbar",component:NavbarComponent},
{path:"euser/:id",component:UpdateUserComponent},
{path:"bestproduct",component:BestproductComponent},
{path:"weather",component:WeatherComponent},
{path:"chart",component:ChartComponent},
{path:"excel",component:ExcelComponent},
{path:"views",component:ViewsComponent},
{path:"",redirectTo:"home",pathMatch:"full"}
  
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
   
  ], 
  exports: [RouterModule]

    
  
})
export class AppRoutingModule { }
