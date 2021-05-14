import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { AdminproductiveRoutingModule } from './adminproductive-routing.module';
import { AddproductComponent } from './addproduct/addproduct.component';
import { PutproductComponent } from './putproduct/putproduct.component';
import { ListproductComponent } from './listproduct/listproduct.component';
import { AddcategoryComponent } from './addcategory/addcategory.component';
import { PutcategoryComponent } from './putcategory/putcategory.component';
import { ListcategoryComponent } from './listcategory/listcategory.component';
import { ProductcathomeComponent } from './productcathome/productcathome.component';
import { HomeadminComponent } from './homeadmin/homeadmin.component';


@NgModule({
  declarations: [AddproductComponent, PutproductComponent, ListproductComponent, AddcategoryComponent, PutcategoryComponent, ListcategoryComponent, ProductcathomeComponent, HomeadminComponent],
  imports: [
    CommonModule,
    FormsModule, ReactiveFormsModule ,
    AdminproductiveRoutingModule
  ],
  exports:[
    AddproductComponent, PutproductComponent, ListproductComponent, AddcategoryComponent, PutcategoryComponent, ListcategoryComponent, ProductcathomeComponent, HomeadminComponent
  ]
})
export class AdminproductiveModule { }
