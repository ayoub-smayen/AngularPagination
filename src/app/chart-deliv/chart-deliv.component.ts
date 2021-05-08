import { Component, OnInit } from '@angular/core';
import { ChartOptions, ChartType, ChartDataSets } from 'chart.js';
import { Label, Color } from 'ng2-charts';
import { DeliveryManService } from '../delivery-man.service';
import { DeliveryMan } from '../deliverymanmodel';

@Component({
  selector: 'app-chart-deliv',
  templateUrl: './chart-deliv.component.html',
  styleUrls: ['./chart-deliv.component.css']
})
export class ChartDelivComponent implements OnInit {

  barChartLabels: Label[];
  constructor(private _service: DeliveryManService){
    this.username=[];
    this.barChartData=[
      { data: [], label: '' }
    ]
    this.workload=[];

  }
  ngOnInit(): void {
    
    this.barChartLabels= this.username;
    // ["Pending", "InProgress", "OnHold", "Complete", "Cancelled"];
    this.barChartData=[
      { data: this.workload, label: 'Workload' }
    ]

    this.getlistofdeliveryman();
  }

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
  };
  listDeliveryMan: DeliveryMan[];
  username: string[];
  workload: number[];
  title = 'bar-chart';
  
 public barChartColors: Color[] = [
  { backgroundColor: 'green' },
]

  barChartData: ChartDataSets[] ;
  /*[
    { data: [45, 37, 60, 70, 46], label: 'Task Status' }
  ];*/



  public getlistofdeliveryman(){
    let resp= this._service.getListDeliveryMan();
    resp.subscribe((res)=>{this.listDeliveryMan=res
    this.listDeliveryMan.forEach(el=>{
this.username.push(el.deliveryMan_Name)
this.workload.push(el.workLoad)



    })
    
    
    
    
    });
   }
}
