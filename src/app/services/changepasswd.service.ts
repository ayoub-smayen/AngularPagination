import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from "@angular/common/http";
import { NewPassword } from ".././models/new-password";
@Injectable({
  providedIn: 'root'
})
export class ChangepasswdService {

  constructor(private http : HttpClient) { }

  changePassword(n: NewPassword){
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': localStorage.getItem('jwt') !== null ? 'Bearer ' + localStorage.getItem('jwt') : ''
      })
    };
    return this.http.put("http://localhost:8091/api1/user/changepassworduser",n,httpOptions);

  }
}
