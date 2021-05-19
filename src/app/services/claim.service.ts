import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Claim } from '../models/claim';

@Injectable({
  providedIn: 'root'
})
export class ClaimService {

 
  private apiServerUrl= 'http://localhost:8091/api';
  constructor(private http: HttpClient) {}


  

  public add(claim:Claim): Observable<Claim> {
    return this.http.post<Claim>(`${this.apiServerUrl}/add`, claim);
  }

  public getAll(): Observable<Claim[]>{
    return this.http.get<Claim[]>(`${this.apiServerUrl}/get`);
}

public findClaim(subject: string) {
  return this.http.get(`${this.apiServerUrl}/findcat/${subject}`);
}
public findClaimbyid(id: number) :Observable<Claim>{
  return this.http.get<Claim>(`${this.apiServerUrl}/find/${id}`);
}

public updateclaim(idClaim: number,claim: Claim): Observable<Claim> {
  return this.http.put<Claim>(`${this.apiServerUrl}/updateclaim/${idClaim}`, Claim);
} 
public deleteClaim(idClaim: number): Observable<Claim[]> {
  return this.http.delete<Claim[]>(`${this.apiServerUrl}/deleteclaim/${idClaim}`);
}
public getdeliverymanClaims(): Observable<Claim[]>{
  return this.http.get<Claim[]>(`${this.apiServerUrl}/getdeliverymanClaims`);
}
}
