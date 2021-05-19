import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Deliveryman } from '../models/deliveryman';

@Injectable({
  providedIn: 'root'
})
export class DeliverymanService {

  private apiServerUrl= 'http://localhost:8091';
  constructor(private http: HttpClient) { }


  public frais(delivId: number,prodId: number ): Observable<number> {
    return this.http.get<number>(`${this.apiServerUrl}/frais/${delivId}/${prodId}`);
  }

  public affectDeliveryMan(delivId: number): Observable<Deliveryman> {
    return this.http.get<Deliveryman>(`${this.apiServerUrl}/apiyes/findDelivery/${delivId}`);
  }


  public addDeliveryMan(deliveryMan: Deliveryman): Observable<Deliveryman> {
    return this.http.post<Deliveryman>(`${this.apiServerUrl}/apiyes/adddeliveryman`, deliveryMan);
  }
  public getListDeliveryMan(): Observable<Deliveryman[]>{
    return this.http.get<Deliveryman[]>(`${this.apiServerUrl}/apiyes/showListDeliv`);
}

 
public updateDeliveryMan(delivId: number,deliv: Deliveryman): Observable<Deliveryman> {
  return this.http.put<Deliveryman>(`${this.apiServerUrl}/update/${delivId}`, deliv);
} 
public deleteDeliveryMan(delivId: number): Observable<Deliveryman> {
  return this.http.delete<Deliveryman>(`${this.apiServerUrl}/apiyes/delete/${delivId}`);
}



public delivofmonth(): Observable<Deliveryman[]>{
  return this.http.get<Deliveryman[]>(`${this.apiServerUrl}/apiyes/delivofmonth`);
}

public searchbylastname(lastname: string) {
  return this.http.get(`${this.apiServerUrl}/apiyes/findcat1/${lastname}`);
}
 public findDeliveryManbyId(id: number){
   return this.http.get(`${this.apiServerUrl}/apiyes/findDeliveryManbyId/${id}`);
 }

 // constructor() { }
}
