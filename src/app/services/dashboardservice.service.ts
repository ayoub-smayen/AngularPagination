import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class DashboardserviceService {

  constructor(private http: HttpClient) { }
   /* getDashboard() {
        return this.http.get(`http://localhost:8091/api/dashboard/get/${dashboard_id}`);
    }*/

    getDashboard(dashboard_id:number) {
      return this.http.get(`http://localhost:8091/api/profit/get/${dashboard_id}`);
      
  }
    getProfitPerMonth() {
      return this.http.get("http://localhost:8091/api/profitpermonth");
      
  }
  getBestProductLikeDeslike() {
    return this.http.get("http://localhost:8091/api/dashboard/bestproductlikedeslike");
    
}
  
getGeneralStatic() {
  return this.http.get("http://localhost:8091/api/agesexecity");
  
}
getTodayRevenueDash() {
  return this.http.get("http://localhost:8091/api/getTodayRevenueDash");
  
}
getVisit() {
  return this.http.get("http://localhost:8091/api/lvisit");
  
}

  

}