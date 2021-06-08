import { Component, OnInit } from '@angular/core';
import { DashboardserviceService } from '../services/dashboardservice.service';
import { ProfitserviceService } from '../services/profitservice.service';
import * as pluginDataLabels from 'chartjs-plugin-datalabels';
import { ActivatedRoute, Router } from '@angular/router';
import { Profit } from '../models/profit';
import { HttpClient } from '@angular/common/http';
import { Label } from 'ng2-charts';
import { ChartOptions, ChartType } from 'chart.js';
import { EuserserviceService } from '../services/euserservice.service';
import { Euser } from '../models/euser';


@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartComponent  {
 
    

      public month:string[]=[];
      public profit:number[]=[];
      listUser:any;
      username:string;

      barChartLabels2: Label[];
      barChartData2;
      constructor(private route: ActivatedRoute, private http:HttpClient,private euser :EuserserviceService,
        private router: Router, private profitserviceService : ProfitserviceService ,private dashboardserviceService : DashboardserviceService) { }
    ngOnInit(): void {
    
  this.barChartLabels2= this.month;
 
  this.barChartData2=[
    { data: this.profit, label: 'profitpermonth' }
  ]
    this.getProfitPerMonth();}
    
  
      


       barChartType: ChartType = 'bar';
       barChartLegend = true;
       barChartPlugins:any = {'backgroundColor': [
         "#FF6384",
      "#4BC0C0",
      "#FFCE56",
      "#E7E9ED",
      "#36A2EB"
      ]}
     barChartOptions: ChartOptions = {
       responsive: true,
     }

   public stat:any;

  
   
    getProfitPerMonth() {
      return this.http.get<any>("http://localhost:8091/api/profit/gett").subscribe(res=>{
        this.stat = res;
     
      console.log(this.stat);
      this.stat.forEach((element:any) => {
        this.profit.push((element.income-element.outcome)/element.income)
        this.month.push(element.month);
        
        
  })
})
    }
    
  }

  


    







    
  
  


