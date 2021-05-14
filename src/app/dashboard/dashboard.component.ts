import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ChartOptions, ChartType } from 'chart.js';
import { Label } from 'ng2-charts';
import { Dashboard } from '../models/dashboard';
import { DashboardserviceService } from '../services/dashboardservice.service';
import * as pluginDataLabels from 'chartjs-plugin-datalabels';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
// Pie
public pieChartOptions: ChartOptions = {
  responsive: true,
  legend: {
    position: 'top',
  },
  plugins: {
    datalabels: {
      formatter: (value, ctx) => {
        const label = ctx.chart.data.labels[ctx.dataIndex];
        return label;
      },
    },
  }
};
public pieChartLabels: Label[] = [['New', 'Customers'], ['Returning','Customers']];
public pieChartData: number[] = [300, 500];
public pieChartType: ChartType = 'pie';
public pieChartLegend = true;
public pieChartPlugins = [pluginDataLabels];
public pieChartColors = [
  {
    backgroundColor: ['rgba(255,0,0,0.3)', 'rgba(0,255,0,0.3)'],
  },
];
  constructor(private route: ActivatedRoute, private http:HttpClient,
    private router: Router,private dhashboardserviceService: DashboardserviceService ) { }

   
  ngOnInit() {
}

 
num=0;
getAppvisit()
{
 const httpOptions = {
   headers: new HttpHeaders({'Content-Type': 'text/plain'})
 };

return  this.http.get("http://localhost:8091/api/lvisit",httpOptions).subscribe((res:number) =>{
   
alert(res);
this.num = res;

        
});
}
}
