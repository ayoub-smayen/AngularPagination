import { Injectable } from '@angular/core';
var SockJs = require("sockjs-client");
var Stomp = require("stompjs");
@Injectable({
  providedIn: 'root'
})
export class WebsocketService {

  constructor() { }
  public connect() {
    let socket = new SockJs(`http://localhost:8080/ws`);

    let stompClient = Stomp.over(socket);

    return stompClient;
}
}
