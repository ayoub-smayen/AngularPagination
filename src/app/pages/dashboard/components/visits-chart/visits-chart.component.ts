import { Component, Input } from '@angular/core';

import { VisitsChartData } from '../../models';
import { colors } from '../../../../consts';
import { DatePipe } from '@angular/common';
import { DashboardService } from '../../services';
import { UsersService } from 'src/app/pages/users/services';

@Component({
  selector: 'app-visits-chart',
  templateUrl: './visits-chart.component.html',
  styleUrls: ['./visits-chart.component.scss'],
  providers: [DatePipe],
})
export class VisitsChartComponent {
  public myDate: Date = new Date();
  public cDate: String;
  public clientNbm: number;
  public usersNbm: number;
  public rate: number;
  @Input() visitsChartData: VisitsChartData;
  public colors: typeof colors = colors;
  constructor(private datePipe: DatePipe, private service: UsersService) {
    this.cDate = this.datePipe.transform(this.myDate, 'yyyy-MM-dd');
    this.service.loadAll().subscribe((res) => {
      this.usersNbm = res.length;
    });
    this.service.loadClients().subscribe((res) => {
      this.clientNbm = res.length;
      this.rate = (this.clientNbm / this.usersNbm) * 100;
    });
  }
}
