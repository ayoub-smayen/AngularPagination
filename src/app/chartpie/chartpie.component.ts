/*import { Component, Input, OnInit } from '@angular/core';
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
import { colors } from './color';
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
  public colors: typeof colors = colors;

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
}*/
import {Component, Input, OnInit, AfterViewInit} from '@angular/core';
import * as _ from 'lodash';
import { Chart} from 'chart.js';
import {Euser} from '../Models/Euser';
import {EuserserviceService} from '../services/euserservice.service';
import {HttpErrorResponse} from '@angular/common/http';
import { DashboardserviceService } from '../services/dashboardservice.service';
//Chart.register(...registerables);


@Component({
  selector: 'app-chartpie',
  templateUrl: './chartpie.component.html',
  styleUrls: ['./chartpie.component.css']
})
export class ChartpieComponent implements OnInit {
  @Input('my-id') myId = '';
  @Input('type') type = 'bar';
  @Input('data') data = [];
  listDesutUtilisateur: Euser[];

  constructor(private userService: EuserserviceService,private dashboardService: DashboardserviceService) { }

  ngOnInit(){
     let usera = [];
     let users = [];
     let userc = [];
     let productN = [];
     let ProductM = [];


    /* this.dashboardService.getagesexecity().subscribe(
      (response: Euser[]) => {
        for (const dataobj of response){
          usera.push(dataobj.age,dataobj.sexe,dataobj.city);
          users.push(dataobj.sexe);
          
          //userc.push(dataobj.city);
        }
        new Chart('chart1',{
          type: 'bar',
          data: {
            labels: usera,
            datasets: [{
              label: '# of Votes',
              data: users,
              backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)',
                'rgba(229, 225, 224, 0.2)',
                'rgba(204, 225, 229, 0.2)',
                'rgba(204, 204, 255, 0.2)',
                'rgba(102, 255, 255, 0.2)',
              ],
              borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)',
                'rgba(229, 225, 224, 1)',
                'rgba(204, 225, 229, 1)',
                'rgba(204, 204, 255, 1)',
                'rgba(102, 255, 255, 1)'
              ],
              borderWidth: 1
            }]
          },
        });
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );*/
    this.dashboardService.getagesexecity().subscribe(
      (response: Euser[]) => {
        for (const dataobj of response){
          usera.push(dataobj.age,dataobj.sexe,dataobj.city);
          users.push(dataobj.sexe);
          
          //userc.push(dataobj.city);
        }
        
        new Chart('chart2',{
          type: 'doughnut',
          data: {
            labels: usera,
            datasets: [{
              label: '# of Votes',
              data: users,
              backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)',
                'rgba(229, 225, 224, 0.2)',
                'rgba(204, 225, 229, 0.2)',
                'rgba(204, 204, 255, 0.2)',
                'rgba(102, 255, 255, 0.2)',
              ],
              borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)',
                'rgba(229, 225, 224, 1)',
                'rgba(204, 225, 229, 1)',
                'rgba(204, 204, 255, 1)',
                'rgba(102, 255, 255, 1)'
              ],
              borderWidth: 1
            }]
          },
        });
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
    }
  }