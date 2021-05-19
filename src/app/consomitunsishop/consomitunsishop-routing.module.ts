import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductsComponent } from "./products/products.component";

import {  HomestoreComponent} from "./homestore/homestore.component";
import { ForumsComponent } from './forums/forums.component';
import { FavouriteComponent } from './favourite/favourite.component';
import { SproductiveComponent } from './sproductive/sproductive.component';
import { ProdfilteringComponent } from './prodfiltering/prodfiltering.component';
import { ProductexcelComponent } from './productexcel/productexcel.component';


//{ path: '', redirectTo: '/welcome', pathMatch: 'full' },
const routes: Routes = [{
    

path :'homestore' ,  component :HomestoreComponent


},

{
    

  path :'forums' ,  component :ForumsComponent
  
  
  },


  {
    

  path :'slotmach' ,  component : ProductexcelComponent
  
  
  },
  {
    

    path :'prfilter' ,  component :ProdfilteringComponent
    
    
    },

  {
    

    path :'favourite' ,  component :FavouriteComponent
    
    
    },

    {
    

      path :'publicity' ,  component :SproductiveComponent
      
      
      },
{
path :'product/:id' ,  component :ProductsComponent


},





//{ path: 'h',   redirectTo: '/homestore', pathMatch: 'full' },
 ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ConsomitunsishopRoutingModule { }
