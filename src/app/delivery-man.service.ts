import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { DeliveryMan } from './deliverymanmodel';

@Injectable({
  providedIn: 'root'
})
export class DeliveryManService {
  private apiServerUrl= 'http://localhost:8091';
  constructor(private http: HttpClient) {}

  public addDeliveryMan(deliveryMan: DeliveryMan): Observable<DeliveryMan> {
    return this.http.post<DeliveryMan>(`${this.apiServerUrl}/api/adddeliveryman`, deliveryMan);
  }
  public getListDeliveryMan(): Observable<DeliveryMan[]>{
    return this.http.get<DeliveryMan[]>(`${this.apiServerUrl}/api/showListDeliv`);
}

 
public updateDeliveryMan(delivId: number,deliv: DeliveryMan): Observable<DeliveryMan> {
  return this.http.put<DeliveryMan>(`${this.apiServerUrl}/update/${delivId}`, deliv);
} 
public deleteDeliveryMan(delivId: number): Observable<DeliveryMan> {
  return this.http.delete<DeliveryMan>(`${this.apiServerUrl}/api/delete/${delivId}`);
}



public delivofmonth(): Observable<DeliveryMan[]>{
  return this.http.get<DeliveryMan[]>(`${this.apiServerUrl}/api/delivofmonth`);
}

public searchbylastname(lastname: string) {
  return this.http.get(`${this.apiServerUrl}/api/findcat1/${lastname}`);
}
 public findDeliveryManbyId(id: number){
   return this.http.get(`${this.apiServerUrl}/api/findDeliveryManbyId/${id}`);
 }





}
