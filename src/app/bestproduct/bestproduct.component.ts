import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Product } from '../models/product';

@Component({
  selector: 'app-bestproduct',
  templateUrl: './bestproduct.component.html',
  styleUrls: ['./bestproduct.component.css']
})
export class BestproductComponent implements OnInit {
  products:Product[];
  constructor(private http:HttpClient) { }

  ngOnInit(): void {
    this.bestProd();
  }

bestProd()
  {
this.getBestproduct().subscribe((res:Product[])=>
{
  alert(res);
  console.table(res);
  this.products=res;})
}

getBestproduct()
{

  return this.http.get("http://localhost:8091/api/dashboard/bestproductlikedeslike");
  }





  }




