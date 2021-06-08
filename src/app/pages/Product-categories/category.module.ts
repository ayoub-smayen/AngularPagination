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
import { CategoryPageComponent } from './category-page/category-page.component';
import { CategoryTableComponent } from './category-table/category-table.component';
import { CategoryRoutingModule } from './category-routing.module';
import { CategoryService } from './services/category.service';

import { ModelsComponent } from './models/models.component';


import { HttpClientModule } from '@angular/common/http';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
   CategoryPageComponent,
   CategoryTableComponent
  ],
  imports: [
    CommonModule,
    CategoryRoutingModule,
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
    FormsModule
  ],
  providers: [
    CategoryService
  ]
})
export class CategoryModule { }
