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
import { ProfileComponent } from './profile/profile.component';

import { CompteComponent } from './compte/compte.component';
import { AuthenticateComponent } from './authenticate/authenticate.component';
import { UpdateClaimComponent } from './update-claim/update-claim.component';
import { OrderComponent } from './order/order.component';
import { NotifComponent } from './notif/notif.component';


const routes: Routes = [
  { path: 'Statistics', component: ChartDelivComponent },
  { path: 'Listdeliveryman', component: DisplaySearchComponent },
  { path: 'Listclaims', component: ClaimComponent },
  { path: 'adddeliv', component: AddDelivComponent },
  { path: 'showmaps', component: MapsComponent },
  { path: 'addclaim', component: AddClaimComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'authenticate', component: AuthenticateComponent },
  { path: 'compte/:name', component: CompteComponent },
  { path: 'updatedeliv/:id', component: UpdateDelivComponent },
  { path: 'updateClaim/:id2', component: UpdateClaimComponent },
  { path: 'maps/:id1', component: MapsComponent },
  { path: 'order/:name1', component: OrderComponent },
  { path: 'notif', component: NotifComponent }


  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
