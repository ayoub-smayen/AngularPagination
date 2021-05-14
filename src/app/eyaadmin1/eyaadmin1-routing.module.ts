import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BestproductComponent } from './bestproduct/bestproduct.component';
import { ChartComponent } from './chart/chart.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { Dice2Component } from './dice2/dice2.component';
import { EuserComponent } from './euser/euser.component';
import { ExcelComponent } from './excel/excel.component';
import { Profit1Component } from './profit1/profit1.component';
import { ProfitmonthComponent } from './profitmonth/profitmonth.component';
import { SearchComponent } from './search/search.component';
import { UpdateUserComponent } from './update-user/update-user.component';
import { WeatherComponent } from './weather/weather.component';


const routes: Routes = [

{path:"euser",component:EuserComponent},
{path:"search",component:SearchComponent},
{path:"dashboard",component:DashboardComponent},
{path:"profit1",component:Profit1Component},
{path:"profitpermonth",component:ProfitmonthComponent},

{path:"dice2",component:Dice2Component},
//{path:"generalstatistic",component:GeneralstatisticComponent},
//{path:"navbar",component:NavbarComponent},
{path:"euser/:id",component:UpdateUserComponent},
{path:"bestproduct",component:BestproductComponent},
{path:"weather",component:WeatherComponent},
{path:"chart",component:ChartComponent},
{path:"excel",component:ExcelComponent},
{path:"",redirectTo:"home",pathMatch:"full"}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Eyaadmin1RoutingModule { }
