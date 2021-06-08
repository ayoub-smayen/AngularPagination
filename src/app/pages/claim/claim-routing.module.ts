import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { ClaimPageComponent } from "./containers";

const routes: Routes = [
  {
    path: '',
    component: ClaimPageComponent
  }
];
@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class ClaimRoutingModule { }
