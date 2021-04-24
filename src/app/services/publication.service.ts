import { Injectable } from '@angular/core';

import {  HttpClient ,  HttpHeaders} from "@angular/common/http";
import {  Observable} from "rxjs";

import { Publication } from "../models/publication"

@Injectable({
  providedIn: 'root'
})
export class PublicationService {

  constructor(private http : HttpClient) { }


    addPublication(pub:Publication )  {

      const httpOptions = {
        headers: new HttpHeaders({
          'Content-Type': 'application/json',
          'Authorization': localStorage.getItem('jwt') !== null ? 'Bearer ' + localStorage.getItem('jwt') : ''
        })
      };

      return this.http.post("http://localhost:8091/pub/AddPublication",pub,httpOptions);
    }

    viewPubliction(){
      const httpOptions = {
        headers: new HttpHeaders({
          'Content-Type': 'application/json',
          'Authorization': localStorage.getItem('jwt') !== null ? 'Bearer ' + localStorage.getItem('jwt') : ''
        })
      };
      return this.http.get("http://localhost:8091/pub/RetrievePublication",httpOptions);
    }
}
