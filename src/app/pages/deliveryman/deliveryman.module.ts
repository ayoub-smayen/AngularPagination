import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DeliverymanPageComponent } from './containers/deliveryman-page/deliveryman-page.component';
import { MapsComponent } from './components/maps/maps.component';
import { JoblistComponent } from './components/joblist/joblist.component';
import { CliamNumbComponent } from './components/cliam-numb/cliam-numb.component';
import { SharedModule } from '../../shared/shared.module';
import { MatToolbarModule } from '@angular/material/toolbar';
import { DeliverymanRoutingModule } from './deliveryman-routing.module';

@NgModule({
  declarations: [
    DeliverymanPageComponent,
    MapsComponent,
    JoblistComponent,
    CliamNumbComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    DeliverymanRoutingModule,
    MatToolbarModule,
  ],
})
export class DeliverymanModule {}
