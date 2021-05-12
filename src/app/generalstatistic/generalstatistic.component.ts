import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Dashboard } from '../models/dashboard';
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
monthh:string;
margins:number;
profit:any;
euser:any;
age:number;
sexe:string;
city:string;
users:any;



month:Euser[];
dashboards:Euser[];
dashboardss:Euser[];
dashboardsss:Euser[];
//dashboards: {[key: number]: {[key: string]: number } };
dashboard:Dashboard;
profitt:Profit[];
//profitt: Observable<any>;
  /*constructor(private route: ActivatedRoute, 
    private router: Router, private profitserviceService : ProfitserviceService ,private dashboardserviceService : DashboardserviceService ) { }

  ngOnInit(): void {
    this.dashboardserviceService.getGeneralStatic().subscribe((data)=>this.users=data);
   
}


 getStat(){
  this.dashboardserviceService.getGeneralStatic().subscribe((data:Euser[]) =>{ this.users = data;});
 }*/


 constructor(private route: ActivatedRoute, 
  private router: Router, private profitserviceService : ProfitserviceService ,private dashboardserviceService : DashboardserviceService
   ) { }

 
ngOnInit() {/*let resp=this.dashboardserviceService.getProfitPerMonth();
  resp.subscribe((data:Profit[])=>this.dashboards=data);*/
this.getSexeee();
this.getAgeee();
this.getCityyy();
}

getSexeee(){
let resp=this.dashboardserviceService.getGeneralStatic().subscribe((data:Euser[]) =>{ console.log (data);this.dashboards = data;});
}

getAgeee(){
  let resp=this.dashboardserviceService.getAge().subscribe((data:Euser[]) =>{ console.log (data);this.dashboardss = data;});
  }


  getCityyy(){
    let resp=this.dashboardserviceService.getCity().subscribe((data:Euser[]) =>{ console.log (data);this.dashboardsss = data;});
    }
    
}


