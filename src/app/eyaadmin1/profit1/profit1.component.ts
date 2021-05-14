import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { ActivatedRoute, Router } from '@angular/router';
import { ProfitService } from 'src/app/services/profit.service';
import { DashboardService } from 'src/app/services/dashboard.service';
import { Profit } from 'src/app/models/profit';


@Component({
  selector: 'app-profit1',
  templateUrl: './profit1.component.html',
  styleUrls: ['./profit1.component.scss']
})
export class Profit1Component implements OnInit {

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
    private router: Router, private profitserviceService :ProfitService ,private dashboardserviceService : DashboardService ) { }

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
