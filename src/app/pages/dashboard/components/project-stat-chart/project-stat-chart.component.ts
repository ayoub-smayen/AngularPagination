import { Component, Input, OnInit } from '@angular/core';

import { ProjectStatData, ProjectTimeData } from '../../models';
import { colors } from '../../../../consts';
import {
  ApexAxisChartSeries,
  ApexChart,
  ApexDataLabels,
  ApexFill,
  ApexGrid,
  ApexLegend,
  ApexMarkers,
  ApexNonAxisChartSeries,
  ApexPlotOptions,
  ApexResponsive,
  ApexStroke,
  ApexTooltip,
  ApexXAxis,
  ApexYAxis,
} from 'ng-apexcharts';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
interface Weather {
  location: Location;
  current: Current;
  forecast: Forecast;
}

interface Forecast {
  forecastday: Forecastday[];
}

interface Forecastday {
  date: string;
  date_epoch: number;
  day: Day;
  astro: Condition;
  hour: Hour[];
}

interface Hour {
  condition: Condition;
}

interface Day {
  avgtemp_c: number;
  condition: Condition;
}

interface Current {
  temp_c: number;
  condition: Condition;
  wind_mph: number;
  precip_mm: number;
  humidity: number;
  uv: number;
}

interface Condition {
  text: any;
}

interface Location {
  name: string;
  region: string;
  country: string;
  lat: number;
  lon: number;
  tz_id: string;
  localtime_epoch: number;
  localtime: string;
}

type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  dataLabels: ApexDataLabels;
  plotOptions: ApexPlotOptions;
  yaxis: ApexYAxis;
  xaxis: ApexXAxis;
  fill: ApexFill;
  tooltip: ApexTooltip;
  stroke: ApexStroke;
  legend: ApexLegend;
  grid: ApexGrid;
};

enum ProjectsType {
  lightBlue = 'lightBlue',
  SingApp = 'SingApp',
  RNS = 'RNS',
}

@Component({
  selector: 'app-project-stat-chart',
  templateUrl: './project-stat-chart.component.html',
  styleUrls: ['./project-stat-chart.component.scss'],
})
export class ProjectStatChartComponent implements OnInit {
  @Input() projectsStatsData: ProjectStatData;
  public selectedStatsLightBlueData: ProjectTimeData;
  public selectedStatsSingAppData: ProjectTimeData;
  public selectedStatsRNSData: ProjectTimeData;
  public chartOptions: Partial<ChartOptions>;
  public projectsType: typeof ProjectsType = ProjectsType;
  public colors: typeof colors = colors;
  public weather: Weather = {
    location: {
      name: '',
      region: '',
      country: '',
      lat: 0,
      lon: 0,
      tz_id: '',
      localtime_epoch: 0,
      localtime: '',
    },
    current: {
      temp_c: 0,
      condition: { text: '' },
      wind_mph: 0,
      precip_mm: 0,
      humidity: 0,
      uv: 0,
    },
    forecast: {
      forecastday: [
        {
          date: '',
          date_epoch: 0,
          day: {
            avgtemp_c: 0,
            condition: { text: '' },
          },
          astro: { text: '' },
          hour: [{ condition: { text: '' } }],
        },
        {
          date: '',
          date_epoch: 0,
          day: {
            avgtemp_c: 0,
            condition: { text: '' },
          },
          astro: { text: '' },
          hour: [{ condition: { text: '' } }],
        },
        {
          date: '',
          date_epoch: 0,
          day: {
            avgtemp_c: 0,
            condition: { text: '' },
          },
          astro: { text: '' },
          hour: [{ condition: { text: '' } }],
        },
      ],
    },
  };
  public d: Date;
  public weekday = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ];
  public n: number = 0;
  constructor(private http: HttpClient) {}

  public loadWeather(): Observable<Weather> {
    return this.http.get<Weather>(
      'https://api.weatherapi.com/v1/forecast.json?key=d60190bd9fb5489c89284443212602&q=London&days=7&aqi=no&alerts=no'
    );
  }

  public ngOnInit(): void {
    this.loadWeather().subscribe((res) => {
      this.weather = res;
      console.log(this.weather.forecast.forecastday[0].day.avgtemp_c);
      this.d = new Date();
      this.n = this.d.getDay();
    });
    this.selectedStatsLightBlueData = this.projectsStatsData.lightBlue.daily;
    this.selectedStatsSingAppData = this.projectsStatsData.singApp.daily;
    this.selectedStatsRNSData = this.projectsStatsData.rns.daily;

    this.initChart();
  }

  public initChart(): void {
    this.chartOptions = {
      chart: {
        type: 'bar',
        height: 100,
        width: 130,
        toolbar: {
          show: false,
        },
      },
      legend: {
        show: false,
      },
      grid: {
        show: false,
      },
      plotOptions: {
        bar: {
          horizontal: false,
          columnWidth: '70%',

          //  endingShape: 'rounded',
          // startingShape: 'rounded'

          endingShape: 'rounded',
          startingShape: 'rounded',
        },
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        show: true,
        width: 2,
        colors: ['transparent'],
      },
      xaxis: {
        categories: ['Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug'],
        labels: {
          show: false,
        },
        axisTicks: {
          show: false,
        },
        axisBorder: {
          show: false,
        },
      },
      yaxis: {
        show: false,
      },
      tooltip: {
        y: {
          formatter(val) {
            return '$ ' + val + ' thousands';
          },
        },
      },
    };
  }

  public changeDateType(dateType: string, projectType: string): void {
    switch (projectType) {
      case this.projectsType.lightBlue:
        switch (dateType) {
          case 'Weekly':
            this.selectedStatsLightBlueData =
              this.projectsStatsData.lightBlue.week;
            break;
          case 'Monthly':
            this.selectedStatsLightBlueData =
              this.projectsStatsData.lightBlue.monthly;
            break;
          default:
            this.selectedStatsLightBlueData =
              this.projectsStatsData.lightBlue.daily;
        }
        break;
      case this.projectsType.SingApp:
        switch (dateType) {
          case 'Weekly':
            this.selectedStatsSingAppData = this.projectsStatsData.singApp.week;
            break;
          case 'Monthly':
            this.selectedStatsSingAppData =
              this.projectsStatsData.singApp.monthly;
            break;
          default:
            this.selectedStatsSingAppData =
              this.projectsStatsData.singApp.daily;
        }
        break;
      case this.projectsType.RNS:
        switch (dateType) {
          case 'Weekly':
            this.selectedStatsRNSData = this.projectsStatsData.rns.week;
            break;
          case 'Monthly':
            this.selectedStatsRNSData = this.projectsStatsData.rns.monthly;
            break;
          default:
            this.selectedStatsRNSData = this.projectsStatsData.rns.daily;
        }
        break;
    }
  }
}
