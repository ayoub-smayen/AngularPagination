import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { map } from 'rxjs/operators';
import { Dashboard } from 'src/app/models/dashboard';
import { Profit } from 'src/app/models/profit';
import { DashboardService } from 'src/app/services/dashboard.service';
import { ProfitService } from 'src/app/services/profit.service';
import { DashboardComponent } from '../dashboard/dashboard.component';

@Component({
  selector: 'app-profitmonth',
  templateUrl: './profitmonth.component.html',
  styleUrls: ['./profitmonth.component.scss']
})
export class ProfitmonthComponent implements OnInit {

  message:any;
  profit_id:number;
  profits:any;
  income:number;
  outcome:number;
  month:Profit[];
  margins:number;
  profit:any;
  //dashboards:any;
  
  dashboards:Profit[];
  //dashboards: {[key: number]: {[key: string]: number } };
  dashboard:Dashboard;
  profitt:Profit[];
  constructor(private route: ActivatedRoute, 
    private router: Router, private profitserviceService : ProfitService ,private dashboardserviceService : DashboardService
     ) { }

   
  ngOnInit() {/*let resp=this.dashboardserviceService.getProfitPerMonth();
    resp.subscribe((data:Profit[])=>this.dashboards=data);*/
this.getMonth1();
this.getProfitMonthly();
  
}
/*getProfitMonthly(){
  let resp=this.dashboardserviceService.getProfitPerMonth().subscribe((data:Profit[]) =>{ console.log (data);this.dashboards = data;});
 }*/
 getProfitMonthly(){
  let resp=this.dashboardserviceService.getProfit3().subscribe((data:Profit[]) =>{ console.log (data);this.dashboards = data;});
 }
 
 getMonth1(){
  let resp=this.profitserviceService.getMonth().subscribe((data:Profit[]) =>{ console.log (data);this.month = data;});
 }

}
