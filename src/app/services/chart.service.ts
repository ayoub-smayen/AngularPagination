import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable,of } from 'rxjs';
import { HeatmapChartData } from '../models/heatmap';
import { Stat } from '../models/stat';

@Injectable({
  providedIn: 'root'
})
export class ChartService {

  constructor(private http:HttpClient) { }


  public loadPieChartData(): Observable<Stat> {
    
    return this.http.get<Stat>("http://localhost:8091/api/agesexecity")}
      
    
  public loadHeatmapChartData(): Observable<HeatmapChartData> {
    return of({
      series: [
        {
          name: 'Metric1',
          data: this.generateApexHeatmapChartData(18, {
            min: 0,
            max: 90,
          }),
        },
        {
          name: 'Metric2',
          data: this.generateApexHeatmapChartData(18, {
            min: 0,
            max: 90,
          }),
        },
        {
          name: 'Metric3',
          data: this.generateApexHeatmapChartData(18, {
            min: 0,
            max: 90,
          }),
        },
        {
          name: 'Metric4',
          data: this.generateApexHeatmapChartData(18, {
            min: 0,
            max: 90,
          }),
        },
        {
          name: 'Metric5',
          data: this.generateApexHeatmapChartData(18, {
            min: 0,
            max: 90,
          }),
        },
        {
          name: 'Metric6',
          data: this.generateApexHeatmapChartData(18, {
            min: 0,
            max: 90,
          }),
        },
        {
          name: 'Metric7',
          data: this.generateApexHeatmapChartData(18, {
            min: 0,
            max: 90,
          }),
        },
        {
          name: 'Metric8',
          data: this.generateApexHeatmapChartData(18, {
            min: 0,
            max: 90,
          }),
        },
        {
          name: 'Metric9',
          data: this.generateApexHeatmapChartData(18, {
            min: 0,
            max: 90,
          }),
        },
      ],
    });
  }
  private generateApexHeatmapChartData(count, yrange): number[] {
    let i = 0;
    const series = [];
    while (i < count) {
      const x = 'w' + (i + 1).toString();
      const y =
        Math.floor(Math.random() * (yrange.max - yrange.min + 1)) + yrange.min;

      series.push({ x, y });
      i++;
    }
    return series;
  }

}
