import { Component, OnInit } from '@angular/core';
import {ChartDataSets, ChartOptions,ChartType } from 'chart.js';
import { Label } from 'ng2-charts';
import { DashboardserviceService } from '../services/dashboardservice.service';
import { ProfitserviceService } from '../services/profitservice.service';
import * as pluginDataLabels from 'chartjs-plugin-datalabels';
import { ActivatedRoute, Router } from '@angular/router';
import { Profit } from '../models/profit';
@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartComponent implements OnInit {
 
    
  /*public barChartOptions: ChartOptions = {
    responsive: true,
    // We use these empty structures as placeholders for dynamic theming.
    scales: { xAxes: [{}], yAxes: [{}] },
    plugins: {
      datalabels: {
        anchor: 'end',
        align: 'end',
      }
    }
  };*/
profit:any;
message:any;
  profit_id:number;
  profits:any;
  income:number;
  outcome:number;
  month:Profit[];
  margins:number;

  dashboards:Profit[];
  public chartOptions: any = {
    responsive: true,
      scales: {
        xAxes: [{
          stacked: true
          }],
        yAxes: [
        {
          stacked: true
        }
      ]
    },
    plugins: {
      datalabels: {
        anchor: 'end',
        align: 'end',
      }
    }
  };


  public barChartLabels: Label[] = ['janvier', 'fevrier', 'mars', 'avril'];
  public barChartType: ChartType = 'bar';
  public barChartLegend = true;
  public barChartPlugins = [pluginDataLabels];

  public barChartData: Array<any> = [
    { data: [1.7999999999999998, 1.6, 0, 1.6], label: 'Profit' },    //{ data: [28, 48, 40, 19, 86, 27, 90], label: 'Series B' }
  ];

  constructor(private route: ActivatedRoute, 
    private router: Router, private profitserviceService : ProfitserviceService ,private dashboardserviceService : DashboardserviceService) { }

  ngOnInit(): void {
  /* this.getMonth1();
this.getProfitMonthly();*/
  
  }

  // events
  public chartClicked({ event, active }: { event: MouseEvent, active: {}[] }): void {
    console.log(event, active);
  }

  public chartHovered({ event, active }: { event: MouseEvent, active: {}[] }): void {
    console.log(event, active);
  }

  /*public randomize(): void {
    // Only Change 3 values
    this.barChartData[0].data = [
      Math.round(Math.random() * 100),
      59,
      80,
      (Math.random() * 100),
      56,
      (Math.random() * 100),
      40 ];
  }*/

  /*getProfitMonthly(){
    let resp=this.dashboardserviceService.getProfit3().subscribe((data:Profit[]) =>{ console.log (data);this.dashboards = data;});
   }
   
   getMonth1(){
    let resp=this.profitserviceService.getMonth().subscribe((data:Profit[]) =>{ console.log (data);this.month = data;});
   }*/


}

