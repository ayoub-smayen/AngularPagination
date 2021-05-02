import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Profit } from '../models/profit';

@Injectable({
  providedIn: 'root'
})
export class ProfitserviceService {

  constructor(private http: HttpClient) { }


    getProfit() {
        return this.http.get("http://localhost:8091/api/profit/get/{profit_id}");
        
    }

    add(profit: Profit) {
         return this.http.post("http://localhost:8091/api/profit/add",profit,{responseType:'text' as 'json'});
    }

    update(id: number, profit: Profit) {
        return this.http.put("http://localhost:8091/api/profit/update/{profit_id}"+id,profit,{responseType:'text' as 'json'});
    }

    delete(id: number) {
        return this.http.delete("http://localhost:8091/api/profit/delete/{profit_id}"+id);
    }
    

}