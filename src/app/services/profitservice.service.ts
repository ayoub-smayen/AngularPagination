import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Profit } from '../models/profit';

@Injectable({
  providedIn: 'root'
})
export class ProfitserviceService {

  constructor(private http: HttpClient) { }

    getProfit(profit_id:number) {
        return this.http.get(`http://localhost:8091/api/profit/get/${profit_id}`);
        
    }
    getAllProfit() {
      return this.http.get("http://localhost:8091/api/profit/get/");
      
  }

  getAllProfitt() {
    return this.http.get(" http://localhost:8091/api/getTodayRevenueDash/");
    
}
getMonth() {
  return this.http.get("http://localhost:8091/api/profit/gett/");
  
}

 
  /*getAllProfit() {
    return this.http.get("http://localhost:8091/api/profit/get",{
      headers:{
        'Content-type':'applicatio/json'
      }
    });*/

    add(profit: Profit) {
         return this.http.post("http://localhost:8091/api/profit/add",profit);
    }

    update(id: number, profit: Profit) {
        return this.http.put("http://localhost:8091/api/profit/update/"+id,profit);
    }

    delete(id: number) {
        return this.http.delete("http://localhost:8091/api/profit/delete/"+id);
    }
    

}
