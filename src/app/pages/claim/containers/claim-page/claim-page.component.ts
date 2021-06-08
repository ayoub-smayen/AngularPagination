import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from '../../models';
import { DashedLineChartData, PieChartData } from '../../models';
import { ChartsService } from '../../services';

@Component({
  selector: 'app-claim-page',
  templateUrl: './claim-page.component.html',
  styleUrls: ['./claim-page.component.scss'],
})
export class ClaimPageComponent {
  public dashedLineChartData$: Observable<DashedLineChartData>;
  public pieChartData$: Observable<PieChartData>;
 

  constructor(private service: ChartsService) {

    this.dashedLineChartData$ = this.service.dashedLineChartData();
    
  }
}
