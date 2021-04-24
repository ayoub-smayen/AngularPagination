import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders  } from "@angular/common/http";
import {  Rayon} from "../models/rayon";
import {  Observable} from "rxjs";
@Injectable({
  providedIn: 'root'
})
export class RayonService {



  constructor(private http : HttpClient) { }

  getRayon() : Observable<Rayon[]>{

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': localStorage.getItem('jwt') !== null ? 'Bearer ' + localStorage.getItem('jwt') : ''
      })
    };

    return this.http.get<Rayon[]>("/api/rayons");

  }

  getRayonByid(id :number) : Observable<Rayon>{

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': localStorage.getItem('jwt') !== null ? 'Bearer ' + localStorage.getItem('jwt') : ''
      })
    };

    return this.http.get<Rayon>("/api/rayon/" + id,httpOptions);

  }


}
