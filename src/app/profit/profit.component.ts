import { Component, OnInit } from '@angular/core';
import { Profit } from '../models/profit';
import { ProfitserviceService } from '../services/profitservice.service';
import { DashboardserviceService } from '../services/dashboardservice.service';
import { Observable } from 'rxjs/internal/Observable';


@Component({
  selector: 'app-profit',
  templateUrl: './profit.component.html',
  styleUrls: ['./profit.component.css']
})
export class ProfitComponent implements OnInit {
profit:Profit[];
message:any;
profit_id:number;
profits:any;
profitt: Observable<any>;
  constructor(private profitserviceService : ProfitserviceService ,private dashboardserviceService : DashboardserviceService ) { }

  ngOnInit(): void {
    this.getProfit1();

   // this.profitserviceService.getProfit().subscribe((data:Profit[]) =>{ this.profit = data;});
}



/*public getProfitMonthly(){
  let resp= this.dashboardserviceService.getProfitPerMonth();
  resp.subscribe((data)=>this.profits=data);
 }*/
getProfitMonthly(){
 // let resp=this.dashboardserviceService.getProfitPerMonth().subscribe((data)=>this.message=data);
 let resp=this.dashboardserviceService.getProfitPerMonth().subscribe((data:Profit[]) =>{ this.profit = data;});
}




/*public getProfit2(){
  let resp= this.dashboardserviceService.getTodayRevenueDash();
  resp.subscribe((data)=>this.profits=data);
 }*/
getProfit1(){
  // let resp=this.dashboardserviceService.getProfitPerMonth().subscribe((data)=>this.message=data);
  let res=this.dashboardserviceService.getTodayRevenueDash().subscribe((data:Profit[]) =>{ this.profit = data;});
 }

 /*getProfit1(){
  // let resp=this.dashboardserviceService.getProfitPerMonth().subscribe((data)=>this.message=data);
  let res=this.profitserviceService.getProfit(this.profit_id).subscribe((data:Profit[]) =>{ this.profit = data;});
 }*/

/*getProfit1(){
  // let resp=this.dashboardserviceService.getProfitPerMonth().subscribe((data)=>this.message=data);
  let res=this.profitserviceService.getAllProfit().subscribe((data:Profit[]) =>{ this.profit = data;});
 }*/
 /*getProfit1(){
  // let resp=this.dashboardserviceService.getProfitPerMonth().subscribe((data)=>this.message=data);
  let res=this.profitserviceService.getProfit(this.profit_id).subscribe((data:Profit[]) =>{ this.profit = data;});
 }*/

}