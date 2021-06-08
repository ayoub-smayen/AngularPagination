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
export interface DashedLineChartData {
  series: Series[];
  categories: string[];
}

interface Series {
  name: string;
  data: number[];
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
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.css'],
})
export class BarChartComponent implements OnInit {
  @Input() dashedLineChartData: DashedLineChartData;
  public apexDashedLineChartOptions: Partial<ChartOptions>;
  public colors: typeof colors = colors;

  public ngOnInit(): void {
    this.initChart();
  }

  public initChart(): void {
    this.apexDashedLineChartOptions = {
      series: this.dashedLineChartData.series,
      chart: {
        height: 350,
        type: 'line',
        toolbar: {
          show: false,
        },
      },
      colors: [colors.YELLOW],
      dataLabels: {
        enabled: false,
      },
      stroke: {
        width: 2,
        curve: 'smooth',
        dashArray: [0, 8, 5],
      },
      legend: {
        show: false,
      },
      markers: {
        size: 0,
        hover: {
          sizeOffset: 6,
        },
      },
      xaxis: {
        labels: {
          trim: false,
          rotate: -45,
        },
        categories: this.dashedLineChartData.categories,
      },
      tooltip: {
        y: [
          {
            title: {
              formatter(val) {
                return val + ' (mins)';
              },
            },
          },
          {
            title: {
              formatter(val) {
                return val + ' per session';
              },
            },
          },
          {
            title: {
              formatter(val) {
                return val;
              },
            },
          },
        ],
      },
      grid: {
        borderColor: colors.LIGHT_BLUE,
      },
    };
  }
}
