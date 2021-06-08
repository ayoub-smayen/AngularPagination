import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { AddPublicityPageComponent } from './add-publicity/add-publicity-page/add-publicity-page.component';
import { PublicitiesPageComponent } from './publicities/publicities-page/publicities-page.component';




const routes: Routes = [
  {
    path: 'addpublicity',
    component: AddPublicityPageComponent
  },

  {
    path: 'publicities',
    component: PublicitiesPageComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})

export class PublicityRoutingModule {
}
