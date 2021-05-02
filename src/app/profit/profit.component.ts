import { Component, OnInit } from '@angular/core';
import { Profit } from '../models/profit';
import { ProfitserviceService } from '../services/profitservice.service';
import { DashboardserviceService } from '../services/dashboardservice.service';

@Component({
  selector: 'app-profit',
  templateUrl: './profit.component.html',
  styleUrls: ['./profit.component.css']
})
export class ProfitComponent implements OnInit {
profit:Profit[];
message:any;
  constructor(private profitserviceService : ProfitserviceService ,private dashboardserviceService : DashboardserviceService ) { }

  ngOnInit(): void {
    this.profitserviceService.getProfit().subscribe((data:Profit[]) =>{ this.profit = data;});
}
getProfit(){
  let resp=this.dashboardserviceService.getProfitPerMonth().subscribe((data)=>this.message=data);
}
}