import { CommonModule } from '@angular/common'
import { HttpClientModule } from '@angular/common/http'
import { NgModule } from '@angular/core'
import { FormsModule } from '@angular/forms'
import { MatButtonModule } from '@angular/material/button'
import { MatCardModule } from '@angular/material/card'
import { MatCheckboxModule } from '@angular/material/checkbox'
import { MatFormFieldModule } from '@angular/material/form-field'
import { MatIconModule } from '@angular/material/icon'
import { MatInputModule } from '@angular/material/input'
import { MatMenuModule } from '@angular/material/menu'
import { MatPaginatorModule } from '@angular/material/paginator'
import { MatSelectModule } from '@angular/material/select'
import { MatTableModule } from '@angular/material/table'
import { MatToolbarModule } from '@angular/material/toolbar'
import { RouterModule, Routes } from '@angular/router'
import { SharedModule } from '../../shared/shared.module'
import { CategoryRoutingModule } from '../Product-categories/category-routing.module'
import { CategoryService } from '../Product-categories/services'
import { RayCreateComponent } from './ray-create/ray-create.component'
import { RayListComponent } from './ray-list/ray-list.component'
import { StockListComponent } from './stock-list/stock-list.component'
import { StockCreateComponent } from './stock-create/stock-create.component';
import { ProductBestComponent } from './product-best/product-best.component'

const routes: Routes = [
  {
    path: 'new',
    component: RayCreateComponent,
  },
  {
    path: 'list',
    component: RayListComponent,
  },
  {
    path: 'products',
    component: ProductBestComponent,
  },
  {
    path: 'stock',
    children: [
      {
        path: 'new',
        component: StockCreateComponent,
      },
      {
        path: 'list',
        component: StockListComponent,
      },
    ],
  },
]

@NgModule({
  declarations: [
    RayCreateComponent,
    RayListComponent,
    StockListComponent,
    StockCreateComponent,
    ProductBestComponent,
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
    FormsModule,
    RouterModule.forChild(routes),
  ],
  providers: [CategoryService],
})
export class RayModule {}
