import { Injectable } from '@angular/core';

import {  HttpClient,HttpHeaders} from "@angular/common/http";
import { Product } from ".././models/product";
import {  environment} from "../../environments/environment";
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }






  
//environment.BACKEND_URL+
   getAllproducts():Observable<Product[]>{
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': localStorage.getItem('jwt') !== null ? 'Bearer ' + localStorage.getItem('jwt') : ''
      })
    };

    return this.http.get<Product[]>("api/products1",httpOptions);
   }


   addProductr(pr :  Product){
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': localStorage.getItem('jwt') !== null ? 'Bearer ' + localStorage.getItem('jwt') : ''
      })
    };
    
    return this.http.post<Product>("api/addprowithImag",pr,httpOptions);
   }


   getProductSearchable(productname){
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': localStorage.getItem('jwt') !== null ? 'Bearer ' + localStorage.getItem('jwt') : ''
      })
    };

    return this.http.get<Product[]>("http://localhost:8091/api/ser?productname=" + productname,httpOptions);
   }

   getAllproducts2():Observable<Product[]>{
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      //  'Authorization': localStorage.getItem('jwt') !== null ? 'Bearer ' + localStorage.getItem('jwt') : ''
      })
    };

    return this.http.get<Product[]>("api/productstunsi1",httpOptions);
   }
////api/products1/1

getAllproducts3(id:number):Observable<Product>{
  const httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    //  'Authorization': localStorage.getItem('jwt') !== null ? 'Bearer ' + localStorage.getItem('jwt') : ''
    })
  };

  return this.http.get<Product>("http://127.0.0.1:8091/api/products1/"  +id,httpOptions);
 }


   getColisenattend(): Observable<any>{
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': localStorage.getItem('jwt') !== null ? 'Bearer ' + localStorage.getItem('jwt') : ''
      })
    };
     return this.http.get("api/colisEnattent");
   }

}
