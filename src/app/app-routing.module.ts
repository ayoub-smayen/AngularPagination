import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EuserComponent } from './euser/euser.component';
import { ProfitComponent } from './profit/profit.component';
import { SearchComponent } from './search/search.component';

const routes: Routes = [
{path:"",redirectTo:"euser",pathMatch:"full"},
{path:"euser",component:EuserComponent},
{path:"search",component:SearchComponent},
{path :"dashboard",component:DashboardComponent},
{path :"profit",  component:ProfitComponent }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
