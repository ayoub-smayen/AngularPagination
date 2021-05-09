import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Euser } from '../models/euser';
import { Profit } from '../models/profit';
import { DashboardserviceService } from '../services/dashboardservice.service';
import { ProfitserviceService } from '../services/profitservice.service';

@Component({
  selector: 'app-generalstatistic',
  templateUrl: './generalstatistic.component.html',
  styleUrls: ['./generalstatistic.component.css']
})
export class GeneralstatisticComponent implements OnInit {
//profit:Profit[];
message:any;
profit_id:number;
profits:any;
income:number;
outcome:number;
month:string;
margins:number;
profit:any;
euser:any;
age:number;
sexe:string;
city:string;
users:any;

//profitt: Observable<any>;
  constructor(private route: ActivatedRoute, 
    private router: Router, private profitserviceService : ProfitserviceService ,private dashboardserviceService : DashboardserviceService ) { }

  ngOnInit(): void {
    let resp=this.dashboardserviceService.getGeneralStatic();
  resp.subscribe((data)=>this.users=data);
   
}


 getStat(){
  let res=this.dashboardserviceService.getGeneralStatic().subscribe((data:Euser[]) =>{ this.users = data;});
 }





}