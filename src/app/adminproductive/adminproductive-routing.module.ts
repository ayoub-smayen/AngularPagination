import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddcategoryComponent } from './addcategory/addcategory.component';
import { AddproductComponent } from './addproduct/addproduct.component';
import { HomeadminComponent } from './homeadmin/homeadmin.component';
import { PutcategoryComponent } from './putcategory/putcategory.component';


const routes: Routes = [
  {
    path :"addcategory1" , 
    component : AddcategoryComponent
  },

  {
    path :"addprod1" , 
    component : AddproductComponent
  },


  {
    path :"gain" , 
    component : HomeadminComponent
  },

  {
    path :"category/:id" , 
    component : PutcategoryComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminproductiveRoutingModule { }
