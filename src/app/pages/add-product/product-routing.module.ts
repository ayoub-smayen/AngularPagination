import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { AddProductPageComponent } from './add-product-page/add-product-page.component';
import { ProductsPageComponent } from './products-page/products-page.component';
import { UpdateProductPageComponent } from './update-product-page/update-product-page.component';




export const routes: Routes = [
  {
    path: 'addproduct',
    component: AddProductPageComponent
  },

  {
    path: 'products',
    component: ProductsPageComponent
  },

  {
    path: 'updateproduct/:id',
    component : UpdateProductPageComponent
  }

];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})

export class ProductRoutingModule {
}
