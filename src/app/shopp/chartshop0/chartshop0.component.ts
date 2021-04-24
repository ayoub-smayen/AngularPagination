import { Component, OnInit } from '@angular/core';
import { ChartDataSets, ChartOptions, Chart,ChartType } from 'chart.js';
import { Color, Label } from 'ng2-charts';
import { HttpClient } from "@angular/common/http";
import { Product } from 'src/app/models/product';

 interface Datafr {
   month : string  ; 
   value :number; 
 }

@Component({
  selector: 'app-chartshop0',
  templateUrl: './chartshop0.component.html',
  styleUrls: ['./chartshop0.component.scss']
})
export class Chartshop0Component implements OnInit {



//{ data: [45, 37, 60, 70, 46, 33], label: 'Best Fruits' }
  barChartOptions: ChartOptions = {
    responsive: true,
  };
  barChartLabels: Label[] = [];
  barChartType: ChartType = 'bar';
  barChartLegend = true;
  barChartPlugins = [];

  barChartData: ChartDataSets[] =  [ { data: [], label: '' } ];


  constructor(private http: HttpClient) { this.dlike  =[];
  
   this.fg = [];
  }
lineChartData: ChartDataSets[] =  [ { data: [], label: '' } ];

lineChartLabels: Label[]=[];
  
  datafr : Product[];


  dlike : number[]=[];
  fg : string[] =[]; 
  prices : number[] =[];

  lineChartOptions = {
    responsive: true,

  };

  lineChartColors: Color[] = [
    {
      borderColor: 'black',
      backgroundColor: 'rgba(255,255,0,0.28)',
    },
  ];

  lineChartLegend = true;
  lineChartPlugins = [];
  lineChartType = 'line';
   getDatafromBack(){
     return this.http.get<Product[]>("http://localhost:8091/api/products1").subscribe(res=>{
       console.log(res);
       this.datafr = res ;

       this.datafr.forEach(data=>{
         this.dlike.push(data.like);
         this.prices.push(data.price);
         this.fg.push(data.createdAt.toString().split(" ")[0]);
       });

        

       console.log(this.dlike);
       console.log(this.fg);
       console.log(this.prices);

       this.lineChartData = 
       [
        { data: this.dlike, label: 'product likes' },
      ];

         this.barChartLabels = this.fg;
      this.barChartData=[
        {
          data : this.prices , label : 'price products'
        }
      ]
      
      this.lineChartLabels  = this.fg;

     });
   }
  ngOnInit(): void {
    this.getDatafromBack();

    
    //['January', 'February', 'March', 'April', 'May', 'June'];
  
   
  }

// [85, 72, 78, 75, 77, 75]
  
  

}
