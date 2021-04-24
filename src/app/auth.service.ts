import { Injectable } from '@angular/core';

import * as Stomp from "stompjs";
import {HttpClient,HttpHeaders  }   from  "@angular/common/http";
import * as SockJs  from "sockjs-client";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http : HttpClient ) { }

  public connect() {
    let socket = new SockJs(`http://localhost:8091/socket`);
  
    let stompClient = Stomp.over(socket);

    return stompClient;




}

  getQrcode(id : number){
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': localStorage.getItem('jwt') !== null ? 'Bearer ' + localStorage.getItem('jwt') : ''
      })
    };

    return  this.http.get("http://localhost:8091/api/qr-code/"+id,httpOptions);

   }
}
