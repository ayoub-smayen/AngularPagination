import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Claim } from './claim';



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

public updateclaim(idClaim: any,claim: Claim): Observable<Claim> {
  let headers = new HttpHeaders();
headers = headers.set('Content-Type', 'application/json; charset=utf-8');
  return this.http.put<Claim>(`${this.apiServerUrl}/updateclaim/${idClaim}`, Claim,{headers: headers});

} 
public deleteClaim(idClaim: number): Observable<Claim[]> {
  return this.http.delete<Claim[]>(`${this.apiServerUrl}/deleteclaim/${idClaim}`);
}
public getdeliverymanClaims(): Observable<Claim[]>{
  return this.http.get<Claim[]>(`${this.apiServerUrl}/getdeliverymanClaims`);
}
  
}
