import { Component, OnInit } from '@angular/core';

import {  Paypal1Service} from "../../service/paypal1.service";

@Component({
  selector: 'app-paypal1',
  templateUrl: './paypal1.component.html',
  styleUrls: ['./paypal1.component.scss']
})
export class Paypal1Component implements OnInit {

  constructor(private pypal : Paypal1Service) { }


  getRequestParams( sum: number): any {
    // tslint:disable-next-line:prefer-const
    let params: any = {};

   
    if (sum) {
      params["sum"] = sum;
    }

    return params;
  }
   sum1 ;
  ngOnInit(): void {
  }

  handlePageSizeChange(event: any): void {
    this.sum1 = event.target.value;
   // this.page = 1;
    this.payment();
  }
  payment(){
    const params = this.getRequestParams(this.sum1);
    console.log(params);
    this.pypal.makePayment(params["sum"]).subscribe(res=>{
      console.log(res);
    })
  }

}
