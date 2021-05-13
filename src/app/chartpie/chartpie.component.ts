import { Component, Input, OnInit } from '@angular/core';
import {
  ApexAxisChartSeries,
  ApexChart,
  ApexDataLabels,
  ApexFill,
  ApexGrid,
  ApexLegend,
  ApexMarkers,
  ApexNonAxisChartSeries,
  ApexResponsive,
  ApexStroke,
  ApexTooltip,
  ApexXAxis,
} from 'ng-apexcharts';
//import { colors } from '.';
import { DashboardserviceService } from '../services/dashboardservice.service';

interface PieChartData {
  series: number[];
  labels: string[];
}
type ChartOptions = {
  series: ApexAxisChartSeries | ApexNonAxisChartSeries;
  chart: ApexChart;
  xaxis: ApexXAxis;
  stroke: ApexStroke;
  tooltip: ApexTooltip;
  dataLabels: ApexDataLabels;
  legend: ApexLegend;
  colors: string[];
  markers: ApexMarkers;
  grid: ApexGrid;
  labels: string[];
  responsive: ApexResponsive[];
  fill: ApexFill;
};

@Component({
  selector: 'app-chartpie',
  templateUrl: './chartpie.component.html',
  styleUrls: ['./chartpie.component.css'],
})
export class ChartpieComponent implements OnInit {
  public pieChartData: PieChartData= { series: [0,0,0],
    labels: ["","",""]}
 constructor(private service :DashboardserviceService) {
  
}
  public apexPieChartOptions: Partial<ChartOptions>;
 // public colors: typeof colors = colors;

  public ngOnInit(): void {
    this.service.getagesexecity().subscribe((res:any) => {
      this.pieChartData.series=[res.Age,res.Sexe,res.City];
      this.pieChartData.labels=["Age","Sexe","City"]
      this.initChart();
    })
    
  }

  public initChart(): void {
    this.apexPieChartOptions = {
      series: this.pieChartData.series,
      chart: {
        type: 'donut',
        height: 400,
      },
      /*colors: [
        colors.BLUE,
        colors.YELLOW,
        colors.PINK,
        colors.GREEN,
        colors.VIOLET,
      ],*/
      legend: {
        position: 'bottom',
        itemMargin: {
          horizontal: 5,
          vertical: 30,
        },
      },
      labels: this.pieChartData.labels,
    };
  }
}