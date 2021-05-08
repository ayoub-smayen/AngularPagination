import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { DeliveryManService } from './delivery-man.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AddDelivComponent } from './add-deliv/add-deliv.component';
import { ClaimComponent } from './claim/claim.component';
import { DisplaySearchComponent } from './display-search/display-search.component';
import { UpdateDelivComponent } from './update-deliv/update-deliv.component';
import { HomeComponent } from './home/home.component';
import { ChartDelivComponent } from './chart-deliv/chart-deliv.component';
import { ChartsModule } from 'ng2-charts';
import { MapsComponent } from './maps/maps.component';
import { AgmCoreModule } from '@agm/core';
import { AddClaimComponent } from './add-claim/add-claim.component';
//import { HaversineService } from "ng2-haversine";
 

@NgModule({
  declarations: [
    AppComponent,
    DisplaySearchComponent,
    
    AddDelivComponent,
    ClaimComponent,
    UpdateDelivComponent,
    HomeComponent,
    ChartDelivComponent,
    MapsComponent,
    AddClaimComponent,
 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ChartsModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyAzg5wkctVR2STruMDMd-GgQqIz_UnVZMc'
    })
  ],
  providers: [DeliveryManService],
  bootstrap: [AppComponent],

})
export class AppModule { }
