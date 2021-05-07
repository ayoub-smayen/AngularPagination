import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EuserComponent } from './euser/euser.component';
import { HomeComponent } from './home/home.component';
import { ProfitComponent } from './profit/profit.component';
import { SearchComponent } from './search/search.component';
import { DiceComponent } from './dice/dice.component';
import { UpdateUserComponent } from './update-user/update-user.component';
import { Dice2Component } from './dice2/dice2.component';

import { DashboardComponent } from './dashboard/dashboard.component';
import { ProfitpermonthComponent } from './profitpermonth/profitpermonth.component';
const routes: Routes = [

{path:"home",component:HomeComponent},
{path:"euser",component:EuserComponent},
{path:"search",component:SearchComponent},
{path:"dashboard",component:DashboardComponent},
{path:"profit",component:ProfitComponent},
{path:"profitpermonth",component:ProfitpermonthComponent},
{path:"dice",component:DiceComponent},
{path:"dice2",component:Dice2Component},
{path:"euser/:id",component:UpdateUserComponent},
{path:"",redirectTo:"home",pathMatch:"full"}
  
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
   
  ], 
  exports: [RouterModule]

    
  
})
export class AppRoutingModule { }
