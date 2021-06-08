import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

import { AdminPageComponent } from './containers';
import { UsersRoutingModule } from './users-routing.module';
import { SharedModule } from '../../shared/shared.module';
import { UserTableComponent } from './components';
import { UsersService } from './services';
import { HttpClientModule } from '@angular/common/http';
import { AdminService } from './services/admin.service';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { MatSortModule } from '@angular/material/sort';
import { AllComponent } from './containers/all/all.component';
import { ManagersPageComponent } from './containers/managers-page/managers-page.component';
import { ClientsPageComponent } from './containers/clients-page/clients-page.component';
import { ManagersTableComponent } from './components/managers-table/managers-table.component';
import { ClientsTableComponent } from './components/clients-table/clients-table.component';
import { AllTableComponent } from './components/all-table/all-table.component';
import { AddAdminComponent } from './components/add-admin/add-admin.component';

import { FormBuilder, FormGroup } from '@angular/forms';
import { DeliverymanPageComponent } from './containers/deliveryman-page/deliveryman-page.component';
import { DeliverymanTableComponent } from './components/deliveryman-table/deliveryman-table.component';

@NgModule({
  declarations: [
    AdminPageComponent,
    UserTableComponent,
    AllComponent,
    ManagersPageComponent,
    ClientsPageComponent,
    ManagersTableComponent,
    ClientsTableComponent,
    AllTableComponent,
    AddAdminComponent,
    DeliverymanPageComponent,
    DeliverymanTableComponent,
  ],
  imports: [
    HttpClientModule,
    CommonModule,
    UsersRoutingModule,
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
    MatInputModule,
    FormsModule,
    MatProgressSpinnerModule,
    MatSortModule,
  ],
  providers: [UsersService, AdminService],
})
export class UsersModule {}
