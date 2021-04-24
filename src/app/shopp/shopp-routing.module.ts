import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {  HomepageComponent} from "./homepage/homepage.component";
import {ClothespageComponent  } from "./clothespage/clothespage.component";
import { CompareprodspageComponent } from "./compareprodspage/compareprodspage.component";
import { ShoppageComponent } from "./shoppage/shoppage.component";
import { CommentforumComponent } from './commentforum/commentforum.component';
import {  MessagedeliveryComponent} from "./messagedelivery/messagedelivery.component";
import { EditprofileComponent } from "./editprofile/editprofile.component";
import {BookComponent  } from "./book/book.component";
import { ShopchattingComponent } from './shopchatting/shopchatting.component';
import { Rayon1Component } from './rayon1/rayon1.component';
import { Paypal1Component } from "./paypal1/paypal1.component";
import {Cartshopping1Component  } from "./cartshopping1/cartshopping1.component";
import { PublicationComponent } from "./publication/publication.component";
import {  ShopmenuComponent} from "./shopmenu/shopmenu.component";
import  {Template1Component} from "./template1/template1.component"
import { Template2Component } from './template2/template2.component';
import {  ShoppmapComponent} from "./shoppmap/shoppmap.component";
import {  Shoppmap2Component} from "./shoppmap2/shoppmap2.component";
import {AdsencesComponent  } from "./adsences/adsences.component";
import { ShopsettingsComponent } from "./shopsettings/shopsettings.component";
import {ShopppublicityComponent  } from "./shopppublicity/shopppublicity.component";
import { ShoppslotmachineComponent } from './shoppslotmachine/shoppslotmachine.component';
import { MydiceComponent } from './mydice/mydice.component';
import { TrackingComponent } from './tracking/tracking.component';
import { Tracking2Component } from './tracking2/tracking2.component';
import { PayementshopComponent } from './payementshop/payementshop.component';
import { Chartshop0Component } from './chartshop0/chartshop0.component';
import { AddcatComponent } from '../myadmin/addcat/addcat.component';
import { AddcatshoppComponent } from './addcatshopp/addcatshopp.component';
const routes: Routes = [{
  path:'home',component: HomepageComponent,
  
  
  
},

{
  path:'pub',component: PublicationComponent,
  
  
  

},
{
  path:'settings1',component: ShopsettingsComponent,
  
  
  

},
{
  path:'shoppub',component: ShopppublicityComponent,
  
  
  

},


{
  path:'ads',component: AdsencesComponent,
  
  
  

},
{
  path:'map2',component: Shoppmap2Component,
  
  
  

},
{
  path:'map',component: ShoppmapComponent,
  
  
  

},
{
  path:'tmp1',component: Template1Component,
  
  
  

},
{
  path:'tmp2',component: Template2Component,
  
  
  

},
{
  path:'menu',component: ShopmenuComponent,
  
  
  

},
{path:'rayons',component: Rayon1Component,
  
  
  
},
{path:'prodcart',component: Cartshopping1Component,
  
  
  
},

{
  path:'track',component: Tracking2Component,
},

{path:'game1',component: ShoppslotmachineComponent,
  
  
  
},

{path:'dice',component: MydiceComponent,
  
  
  
},


{path:'chart',component: Chartshop0Component
  
  
  
},


{path:'pay',component: PayementshopComponent,
  
  
  
},
{path:'addcat',component:AddcatshoppComponent,
  
  
  
},
{
path:'chat1',component: ShopchattingComponent,
  
  
  
},
{
  path:'paypal1',component: Paypal1Component,
    
    
    
  },
{path:'book',component: BookComponent,
  
  
  
},
{path:'editprofile',component: EditprofileComponent,
  
  
  
},
{
  path:'dmsg',component: MessagedeliveryComponent,
}


,{
  path:'cmp',component: CompareprodspageComponent,
}
,{
  path:'clot',component: ClothespageComponent,
},
{
  path:'shop',component: ShoppageComponent,
},
{
  path:'forum',component: CommentforumComponent,
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ShoppRoutingModule { }
