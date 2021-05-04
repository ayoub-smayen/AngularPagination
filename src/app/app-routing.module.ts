import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddPublicationComponent } from './add-publication/add-publication.component';
import { PublicationDetailsComponent } from './publication-details/publication-details.component';
import { PublicationComponent } from './publication/publication.component';


const routes: Routes = [
  { path: 'Showpublication', component:  PublicationComponent},
  {path:'addpub/:id',component: AddPublicationComponent},
  {path:'pubDetails/:id',component: PublicationDetailsComponent},
  { path: '**', component:  PublicationComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
