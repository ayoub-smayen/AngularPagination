import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { map } from 'rxjs/operators';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { Dashboard } from '../models/dashboard';
import { Profit } from '../models/profit';
import { Profit1 } from '../models/profit1';
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
  //dashboards:any;
  
  dashboards:Profit[];
  //dashboards: {[key: number]: {[key: string]: number } };
  dashboard:Dashboard;
  profitt:Profit[];
  constructor(private route: ActivatedRoute, 
    private router: Router, private profitserviceService : ProfitserviceService ,private dashboardserviceService : DashboardserviceService
     ) { }

   
  ngOnInit() {/*let resp=this.dashboardserviceService.getProfitPerMonth();
    resp.subscribe((data:Profit[])=>this.dashboards=data);*/
  
}
/*getProfitMonthly(){
  let resp=this.dashboardserviceService.getProfitPerMonth().subscribe((data:Profit[]) =>{ console.log (data);this.dashboards = data;});
 }*/
 getProfitMonthly(){
  let resp=this.dashboardserviceService.getProfit3().subscribe((data:Profit[]) =>{ console.log (data);this.dashboards = data;});
 }
 
 getMonth(){
  let resp=this.profitserviceService.getAllProfit().subscribe((data:Profit[]) =>{ console.log (data);this.dashboards = data;});
 }
 
}



 /*import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";


interface  Euser{



  age :number,
  sexe : string ,
  city:string  
}
@Component({
  selector: 'app-euser',
  templateUrl: './profitpermonth.component.html',
  styleUrls: ['./profitpermonth.component.css']
})


export class ProfitpermonthComponent implements OnInit {
  gh :Euser ;
  constructor(private http : HttpClient) {  
    
  this.gh =   {age: 1, sexe: "femme", city: "tunis"}; 
  }

  ngOnInit(): void {
    this.getGeneralStatic();
  }
  
  getGeneralStatic(){


    return this.http.get<Euser>("http://localhost:8091/api/agesexecity/").subscribe(res=>{
      this.gh = res;

     
console.log(this.gh);
      
    })


  }

} ta3 abir hedha*/



