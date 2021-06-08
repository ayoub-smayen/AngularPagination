import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import {
  AdminPageComponent,
  AllComponent,
  ClientsPageComponent,
  ManagersPageComponent,
  DeliverymanPageComponent,
} from './containers';

const routes: Routes = [
  {
    path: 'admin',
    component: AdminPageComponent,
  },
  {
    path: 'deliveryman',
    component: DeliverymanPageComponent,
  },
  {
    path: 'all',
    component: AllComponent,
  },
  {
    path: 'manager',
    component: ManagersPageComponent,
  },
  {
    path: 'client',
    component: ClientsPageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UsersRoutingModule {}
