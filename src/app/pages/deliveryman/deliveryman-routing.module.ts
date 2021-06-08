import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { DeliverymanPageComponent } from './containers';

const routes: Routes = [
  {
    path: '',
    component: DeliverymanPageComponent,
  },
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DeliverymanRoutingModule {}
