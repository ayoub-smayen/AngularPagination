import { Injectable } from '@angular/core';

 import {HttpClient, HttpHeaders  } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class AdsenceService {


  URL_API  ="http://localhost:8091/api/userpub";
  constructor(private http : HttpClient) { }

  getAllPubblicities(){
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': localStorage.getItem('jwt') !== null ? 'Bearer ' + localStorage.getItem('jwt') : ''
      })
    };

    return this.http.get(this.URL_API ,httpOptions );
  }
}
