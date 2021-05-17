import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddPublicationComponent } from './add-publication/add-publication.component';
import { AuthComponent } from './auth/auth.component';
import { ChatComponent } from './chat/chat.component';
import { HomeComponent } from './home/home.component';
import { PublicationDetailsComponent } from './publication-details/publication-details.component';
import { PublicationComponent } from './publication/publication.component';


const routes: Routes = [
  {path:'',component:AuthComponent},
  {path:'home/:id',component: HomeComponent,
  children :[
    { path: 'showpublication', component:  PublicationComponent},
  {path:'addpub/:id1',component: PublicationComponent},
  {path:'pubDetails/:id2',component: PublicationDetailsComponent}
  ]

}
  
  
  
  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
