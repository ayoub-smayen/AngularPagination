import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule} from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatFormFieldModule } from '@angular/material/form-field';



import { SharedModule } from '../../shared/shared.module';

import { HttpClientModule } from '@angular/common/http';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddProductPageComponent } from './add-product-page/add-product-page.component';
import { AddProductComponentComponent } from './add-product-component/add-product-component.component';
import { ProductService } from './services/product.service';
import { ProductRoutingModule } from './product-routing.module';
import { CategoryModule } from '../Product-categories/category.module';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';

import { ProductsPageComponent } from './products-page/products-page.component';
import { DialogFromMenuExampleDialog, ProductsComponent } from './products/products.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { UpdateProductComponent, UpdateProductPageComponent } from './update-product-page/update-product-page.component';

@NgModule({
  declarations: [
AddProductPageComponent,
AddProductComponentComponent,
ProductsPageComponent,
ProductsComponent,
DialogFromMenuExampleDialog,
UpdateProductPageComponent,
UpdateProductComponent
 

  ],
  imports: [
    CommonModule,
    ProductRoutingModule,
    MatCardModule,
    MatIconModule,
    MatMenuModule,
    MatTableModule,
    MatButtonModule,
    MatCheckboxModule,
    MatToolbarModule,
    MatPaginatorModule,
    MatFormFieldModule,
    SharedModule,
    HttpClientModule,
    MatInputModule,
    MatSelectModule,
    FormsModule,
    CategoryModule,
    MatAutocompleteModule,
    ReactiveFormsModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatDialogModule
  
    
    
   
  ],
  providers: [
    ProductService,MatSnackBar
  ]
})
export class ProductModule { }
