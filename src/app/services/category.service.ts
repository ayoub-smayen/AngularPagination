import { Injectable } from '@angular/core';
import {  HttpClient,HttpHeaders} from "@angular/common/http";
import {Category  } from ".././models/category";
import {Observable  } from "rxjs";
@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private http:HttpClient) { }

  getAllVCAtegoris() : Observable<Category[]>{
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': localStorage.getItem('jwt') !== null ? 'Bearer ' + localStorage.getItem('jwt') : ''
      })
    };
    return this.http.get<Category[]>("http://localhost:8091/api/cat",httpOptions);
  }


  addCategory(cat : Category){

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': localStorage.getItem('jwt') !== null ? 'Bearer ' + localStorage.getItem('jwt') : ''
      })
    };

    return this.http.post("http://localhost:8091/api/add",cat,httpOptions);
    


  }
}
