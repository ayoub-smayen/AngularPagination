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
import { colors } from '../../../../consts';
import { ChartsService } from '../../services';
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
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.css'],
})
export class PieChartComponent implements OnInit {
  public pieChartData: PieChartData= { series: [0,0,0,0],
    labels: ["","","",""]}
 constructor(private service :ChartsService) {
  
}
  public apexPieChartOptions: Partial<ChartOptions>;
  public colors: typeof colors = colors;

  public ngOnInit(): void {
    this.service.loadPieChartData().subscribe(res => {
      this.pieChartData.series=[res.Product,res.Time,res.Deliveryman,res.Other];
      this.pieChartData.labels=["Product","Time","Deliveryman","Other"]
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
      colors: [
        colors.BLUE,
        colors.YELLOW,
        colors.PINK,
        colors.GREEN,
        colors.VIOLET,
      ],
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
