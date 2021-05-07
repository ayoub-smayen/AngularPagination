import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { Profit } from '../models/profit';
import { DashboardserviceService } from '../services/dashboardservice.service';
import { ProfitserviceService } from '../services/profitservice.service';

@Component({
  selector: 'app-profitpermonth',
  templateUrl: './profitpermonth.component.html',
  styleUrls: ['./profitpermonth.component.css']
})
export class ProfitpermonthComponent implements OnInit {
  message:any;
  profit_id:number;
  profits:any;
  income:number;
  outcome:number;
  month:string;
  margins:number;
  profit:any;
  dashboards:any;
  dashboard:DashboardComponent;
  constructor(private route: ActivatedRoute, 
    private router: Router, private profitserviceService : ProfitserviceService ,private dashboardserviceService : DashboardserviceService
     ) { }

   
  ngOnInit() {let resp=this.dashboardserviceService.getProfitPerMonth();
    resp.subscribe((data)=>this.dashboards=data);
  
}
getProfitMonthly(){
  let resp=this.dashboardserviceService.getProfitPerMonth().subscribe((data) =>{ console.log (data);this.dashboards = data;});
 }


}

