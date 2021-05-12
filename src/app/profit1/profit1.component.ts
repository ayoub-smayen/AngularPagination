import { Component, OnInit } from '@angular/core';
import { Profit } from '../models/profit';
import { ProfitserviceService } from '../services/profitservice.service';
import { DashboardserviceService } from '../services/dashboardservice.service';
import { Observable } from 'rxjs/internal/Observable';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-profit1',
  templateUrl: './profit1.component.html',
  styleUrls: ['./profit1.component.css']
})
export class Profit1Component implements OnInit {

 // profit:Profit[];
message:any;
profit_id:number;
profits:any;
income:number;
outcome:number;
month:string;
margins:number;
profit:any;

//profitt: Observable<any>;
  constructor(private route: ActivatedRoute, 
    private router: Router, private profitserviceService : ProfitserviceService ,private dashboardserviceService : DashboardserviceService ) { }

  ngOnInit(): void {
    //this.getProfit1();
//this.getProfitMonthly();
   // this.profitserviceService.getProfit().subscribe((data:Profit[]) =>{ this.profit = data;});
}


getAllProfit1(){
 let resp=this.profitserviceService.getAllProfit().subscribe((data:Profit) =>{ console.log (data);this.profit = data;});
}

getProfit1(profit_id:number){
  // let resp=this.dashboardserviceService.getProfitPerMonth().subscribe((data)=>this.message=data);
  let res=this.profitserviceService.getProfit(profit_id).subscribe((data:Profit) =>{ this.profit = data;});
 }

 getProfit2(){
  // let resp=this.dashboardserviceService.getProfitPerMonth().subscribe((data)=>this.message=data);
  let res=this.profitserviceService.getAllProfitt().subscribe((data:Profit[]) =>{ this.profit = data;});
 }
 

}