import { Injectable } from '@angular/core';
import { HttpClient,HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { DeliveryMan } from './deliverymanmodel';
@Injectable({
  providedIn: 'root'
})
export class DeliveryService {
  private apiServerUrl= 'http://localhost:8091';
  constructor(private http: HttpClient) { }


  public frais(delivId: number,prodId: number ): Observable<number> {
    return this.http.get<number>(`${this.apiServerUrl}/frais/${delivId}/${prodId}`);
  }

  public affectDeliveryMan(delivId: number): Observable<DeliveryMan> {
    return this.http.get<DeliveryMan>(`${this.apiServerUrl}/api/findDelivery/${delivId}`);
  }


}
