import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Dashboard1Component } from './dashboard1/dashboard1.component';

import { AdminGuard } from '../guards/admin.guard';
import { AddpollComponent } from '../poll/addpoll/addpoll.component';
import { AddprodComponent } from './addprod/addprod.component';
import { ChartyComponent } from "./charty/charty.component";


const routes: Routes = [
  /*{
    path:'dash' ,  component:Dashboard1Component
  },*/

  { path: 'dashborad1', canActivate: [AdminGuard], component: Dashboard1Component },
  { path: 'addprod1', canActivate: [AdminGuard], component: AddprodComponent },
  {
    path:'addpolladmin',  canActivate:[AdminGuard],component : AddpollComponent
  },
  {
    path:'charty',  canActivate:[AdminGuard],component : ChartyComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MyadminRoutingModule { }
