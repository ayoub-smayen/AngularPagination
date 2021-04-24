import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http"

import {Observable  } from "rxjs";
@Injectable({
  providedIn: 'root'
})
export class Paypal1Service {

  constructor(private http : HttpClient) { }



  makePayment(sum) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': localStorage.getItem('jwt') !== null ? 'Bearer ' + localStorage.getItem('jwt') : ''
      })
    };
    
    return this.http.post('paypal/make/payment?sum='+sum, httpOptions);
     //.map((response: Response) => response.json());
  }

  completePayment(paymentId, payerId) {
    return this.http.post('paypal/complete/payment?paymentId=' + paymentId + '&payerId=' + payerId , {})
     // .map((response: Response) => response.json());
  }
}
