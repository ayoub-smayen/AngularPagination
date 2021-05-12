import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddPublicationComponent } from './add-publication/add-publication.component';
import { PublicationDetailsComponent } from './publication-details/publication-details.component';
import { PublicationComponent } from './publication/publication.component';


const routes: Routes = [
  { path: 'Showpublication', component:  PublicationComponent},
  {path:'addpub/:id',component: PublicationComponent},
  {path:'pubDetails/:id',component: PublicationDetailsComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
