import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClaimPageComponent } from './containers/claim-page/claim-page.component';
import { PieChartComponent } from './components/pie-chart/pie-chart.component';
import { BarChartComponent } from './components/bar-chart/bar-chart.component';
import { ClaimTableComponent } from './components/claim-table/claim-table.component';
import { ClaimRoutingModule } from './claim-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatFormFieldModule } from '@angular/material/form-field';
import { NgApexchartsModule } from 'ng-apexcharts';
import { AgmCoreModule } from '@agm/core';
import { ChartsService } from './services';

@NgModule({
  declarations: [
    ClaimPageComponent,
    PieChartComponent,
    BarChartComponent,
    ClaimTableComponent,
  ],
  imports: [
    CommonModule,
    ClaimRoutingModule,
    SharedModule,
    MatToolbarModule,
    MatCardModule,
    MatIconModule,
    MatMenuModule,
    MatTableModule,
    MatButtonModule,
    MatCheckboxModule,
    MatPaginatorModule,
    MatFormFieldModule,
    NgApexchartsModule,
    AgmCoreModule,
  ],
  providers: [ChartsService],
})
export class ClaimModule {}
