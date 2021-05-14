import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-stock',
  templateUrl: './stock.component.html',
  styleUrls: ['./stock.component.scss']
})
export class StockComponent implements OnInit {

  constructor(private http : HttpClient) { }
  
  stock
  ngOnInit(): void {

    this.getStock();
  }
   getStock(){
       return  this.http.get("http://localhost:8091/api/getAllStocks").subscribe(res=>{
   this.stock=res;

   alert(this.stock);
       })
   }
}
