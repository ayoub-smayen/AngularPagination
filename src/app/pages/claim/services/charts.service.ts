import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Employee } from '../models';

import {
  DashedLineChartData,
  HeatmapChartData,
  LineChartData,
  PieChartData,
} from '../models';
import { Claim, Stat } from '../models/claim';

@Injectable({
  providedIn: 'root',
})
export class ChartsService {
  private apiserverUrl=environment.apiBaseUrl;
  constructor(private _http:HttpClient) { }
  public loadLineChartData(): Observable<LineChartData> {
    return of({
      series: [
        {
          name: 'series1',
          data: [31, 40, 28, 51, 42, 109, 100],
        },
        {
          name: 'series2',
          data: [11, 32, 45, 32, 34, 52, 41],
        },
      ],
      categories: [
        '2018-09-19T00:00:00.000Z',
        '2018-09-19T01:30:00.000Z',
        '2018-09-19T02:30:00.000Z',
        '2018-09-19T03:30:00.000Z',
        '2018-09-19T04:30:00.000Z',
        '2018-09-19T05:30:00.000Z',
        '2018-09-19T06:30:00.000Z',
      ],
    });
  }
  
  public dashedLineChartData(): Observable<DashedLineChartData> {
    return of({
      series: [
        {
          name: 'Claims',
          data: [45, 52, 38, 24, 33, 26, 21, 20, 6, 8, 15, 10],
        },
       
      ],
      categories: [
        'Jan',
        'Fev',
        'Mars',
        'Avr',
        'Mai',
        'Juin',
        'Juit',
        'Aout',
        'Sept',
        'Oct',
        'Nov',
        'Dec',
      ],
    });
  }
  

  public loadPieChartData(): Observable<Stat> {
    
    return this._http.get<Stat>("http://localhost:8092/saticclaim")}
      
    
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
  public getClaim() : Observable<Claim[]> {
    return this._http.get<Claim[]>(`${this.apiserverUrl}/cat`);
}
public addClaim( claim: Claim) : Observable<Claim[]> {
    return this._http.post<Claim[]>(`${this.apiserverUrl}/add`, claim);
}/*
public updateClaim( idclaim: number) : Observable<Claim[]> {
    return this._http.put<Claim[]>(`${this.apiserverUrl}/updateclaim/${idclaim}`,);
}*/
public deleteClaim( idclaim: number) : Observable<void> {
    return this._http.delete<void>(`${this.apiserverUrl}/deleteclaim/${idclaim}`);
}
public getStatique() : Observable<Claim[]> {
    return this._http.get<Claim[]>(`${this.apiserverUrl}/saticclaim`)
}
public getStatiquedelivery() : Observable<Claim> {
    return this._http.get<Claim>(`${this.apiserverUrl}/list`)

}
}
