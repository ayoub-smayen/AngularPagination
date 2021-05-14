import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DefaultComponent } from './default/default.component';

import { MatSidenavModule } from '@angular/material/sidenav';
//, , , , 
import {MatDividerModule} from  "@angular/material/divider";
import { MatCardModule } from "@angular/material/card";
import {  MatPaginatorModule} from "@angular/material/paginator";

import {MatTableModule} from "@angular/material/table";
import { FlexLayoutModule } from '@angular/flex-layout';
import { AyoubadminModule } from "../ayoubadmin/ayoubadmin.module";
import { RouterModule } from '@angular/router';
//import {  } from "";

@NgModule({
  declarations: [DefaultComponent],
  imports: [
    CommonModule,
    AyoubadminModule,
    MatSidenavModule,
    MatDividerModule,
    FlexLayoutModule,
    MatCardModule,
    MatPaginatorModule,
    MatTableModule,
    RouterModule
  ],
  exports :[
    DefaultComponent
  ],
  bootstrap:[DefaultComponent]
})
export class LayoutsModule { }
