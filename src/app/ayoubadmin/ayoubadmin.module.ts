import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AyoubadminRoutingModule } from './ayoubadmin-routing.module';
import { SharedComponent } from './shared/shared.component';
import { AyoubdashboardComponent } from './ayoubdashboard/ayoubdashboard.component';
import { AyoubfooterComponent } from './ayoubfooter/ayoubfooter.component';
import { AyoubheaderComponent } from './ayoubheader/ayoubheader.component';
import { AyoubsiedbarComponent } from './ayoubsiedbar/ayoubsiedbar.component';
import { AyoubareaComponent } from './ayoubarea/ayoubarea.component';
import { AyoubcardComponent } from './ayoubcard/ayoubcard.component';
import { AyoubpieComponent } from './ayoubpie/ayoubpie.component';
import {MatDividerModule} from  "@angular/material/divider";
import { MatCardModule } from "@angular/material/card";
import {  MatPaginatorModule} from "@angular/material/paginator";

import {MatTableModule} from "@angular/material/table";
import { FlexLayoutModule } from '@angular/flex-layout';

//, , , , 

import {MatToolbarModule  } from "@angular/material/toolbar";
import {  MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from  "@angular/material/button";

import {  MatMenuModule} from "@angular/material/menu";
import { MatListModule } from "@angular/material/list";

import { HighchartsChartModule } from 'highcharts-angular';
import { RouterModule } from '@angular/router';
import {ShoppModule  } from "../shopp/shopp.module";
import { AdminproductiveModule } from "../adminproductive/adminproductive.module";
import { PollModule } from '../poll/poll.module';
@NgModule({
  declarations: [SharedComponent, AyoubdashboardComponent, AyoubfooterComponent, AyoubheaderComponent, AyoubsiedbarComponent, AyoubareaComponent, AyoubcardComponent, AyoubpieComponent],
  imports: [
    CommonModule,
    AyoubadminRoutingModule,
    MatTableModule,
    MatPaginatorModule,
    AdminproductiveModule,
    MatCardModule,
    MatDividerModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    FlexLayoutModule,
    HighchartsChartModule,
    MatMenuModule,
    ShoppModule,
    MatListModule,
    RouterModule,
    PollModule
  ],
  exports:[
    SharedComponent, AyoubdashboardComponent, AyoubfooterComponent, AyoubheaderComponent, AyoubsiedbarComponent, AyoubareaComponent, AyoubcardComponent, AyoubpieComponent

  ]
})
export class AyoubadminModule { }
