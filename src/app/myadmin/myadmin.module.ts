import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MyadminRoutingModule } from './myadmin-routing.module';
import { Dashboard1Component } from './dashboard1/dashboard1.component';

import { BrowserModule } from '@angular/platform-browser';


import { FormsModule } from '@angular/forms';

import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AdminGuard } from '../guards/admin.guard';
import { AddprodComponent } from './addprod/addprod.component';
import { AddcatComponent } from './addcat/addcat.component';
import { ProfitComponent } from './profit/profit.component';
import { EuserComponent } from './euser/euser.component';
import { ChartyComponent } from './charty/charty.component';
@NgModule({
  declarations: [Dashboard1Component, AddprodComponent, AddcatComponent, ProfitComponent, EuserComponent, ChartyComponent],
  imports: [
    CommonModule,
    MyadminRoutingModule,
    FormsModule,
    BrowserModule,
    BrowserAnimationsModule,

    MatToolbarModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule

  ],
  exports:[
    Dashboard1Component,AddprodComponent,AddcatComponent
  ],
  providers:[
    /*AuthService,
    PollService,
    AuthGuard,*/
    AdminGuard
  ]
})
export class MyadminModule { }
