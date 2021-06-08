import { Component, Input } from '@angular/core';
import { AdminService, UsersService } from 'src/app/pages/users/services';

import { PerformanceChartData } from '../../models';
import { DashboardService } from '../../services';

@Component({
  selector: 'app-performance-chart',
  templateUrl: './performance-chart.component.html',
  styleUrls: ['./performance-chart.component.scss'],
})
export class PerformanceChartComponent {
  public AdminNbm: number;
  public managerNbm: number;
  @Input() performanceChartData: PerformanceChartData;
  constructor(private service: UsersService, private service2: AdminService) {
    this.service.loadManagers().subscribe((res) => {
      this.managerNbm = res.length * 20;
    });
    this.service2.loadAdmins().subscribe((res) => {
      this.AdminNbm = res.length * 20;
    });
  }
}
