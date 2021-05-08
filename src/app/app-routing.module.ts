import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddDelivComponent } from './add-deliv/add-deliv.component';
import { ClaimComponent } from './claim/claim.component';
import { DisplaySearchComponent } from './display-search/display-search.component';
import { UpdateDelivComponent } from './update-deliv/update-deliv.component';
import { HomeComponent } from './home/home.component';
import { ChartDelivComponent } from './chart-deliv/chart-deliv.component';
import { MapsComponent } from './maps/maps.component';
import { AddClaimComponent } from './add-claim/add-claim.component';


const routes: Routes = [
  { path: 'Statistics', component: ChartDelivComponent },
  { path: 'List of delivery man', component: DisplaySearchComponent },
  { path: 'List of claims', component: ClaimComponent },
  { path: 'adddeliv', component: AddDelivComponent },
  { path: 'showmaps', component: MapsComponent },
  { path: 'addclaim', component: AddClaimComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
