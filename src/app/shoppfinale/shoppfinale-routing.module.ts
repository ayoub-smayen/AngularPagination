import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from '../guards/auth.guard';
import { Profile } from '../models/profile';
import { AboutpageComponent } from './aboutpage/aboutpage.component';
import { BrandpageComponent } from './brandpage/brandpage.component';
import { ContactpageComponent } from './contactpage/contactpage.component';
import { DelivdisplaysearchComponent } from './delivdisplaysearch/delivdisplaysearch.component';
import { DelivprofilepageComponent } from './delivprofilepage/delivprofilepage.component';
import { FavouritefhomepageComponent } from './favouritefhomepage/favouritefhomepage.component';
import { FinalhomepageComponent } from './finalhomepage/finalhomepage.component';
import { Forumspage1Component } from './forumspage1/forumspage1.component';
import { MapspageComponent } from './mapspage/mapspage.component';
import { Mytemplate1pageComponent } from './mytemplate1page/mytemplate1page.component';
import { ProddetailspageComponent } from './proddetailspage/proddetailspage.component';
import { Prodfilkpage1Component } from './prodfilkpage1/prodfilkpage1.component';
import { ProfilefhomepageComponent } from './profilefhomepage/profilefhomepage.component';
import { SpecialhomepageComponent } from './specialhomepage/specialhomepage.component';


const routes: Routes = [
     {
       path :'finalshop' ,  canActivate :  [AuthGuard]  ,  component :  FinalhomepageComponent 

       ,
       children : [

       /* {
          path : 'profile' , component : ProfilefhomepageComponent
        }
,*/
           {
             path : 'contact' , component : ContactpageComponent
           }
           ,
           {
            path : 'searching' , component : Mytemplate1pageComponent
          }
          ,
           {
            path : 'forum' , component : Forumspage1Component
          }
           ,
           {
            path : 'about' , component : AboutpageComponent
          },
          {
            path : 'favourite' , component : FavouritefhomepageComponent
          }
          ,
          {
            path : 'delivsearch' , component : DelivdisplaysearchComponent
          },
          {
            path : 'delimaps' , component : MapspageComponent
          },
          {
            path : 'deliprofile' , component : DelivprofilepageComponent
          }
          ,
          {
            path : 'brand' , component : BrandpageComponent
          },
          {
            path : 'special' , component : SpecialhomepageComponent
          },
          {
            path : 'contact' , component : ContactpageComponent
          },
          {
            path : 'fruits' , component : Prodfilkpage1Component
          },

          {
            path : 'productdet/:id' , component : ProddetailspageComponent
          }
,

         
       ]
     },
     { path: '',   redirectTo: '/finalshop', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ShoppfinaleRoutingModule { }
