import { Injectable } from '@angular/core';
import * as Stomp from 'stompjs'
import * as SockJS from 'sockjs-client';
@Injectable({
  providedIn: 'root'
})
export class MessageserviceService {
  public stompClient;
  public msg = [];
  constructor() { 
    this.initializeWebSocketConnection();
  }
  initializeWebSocketConnection() {
    const serverUrl = 'http://localhost:8080/ws';
    const ws = new SockJS(serverUrl);
    this.stompClient = Stomp.over(ws);
    const that = this;
    // tslint:disable-next-line:only-arrow-functions
    this.stompClient.connect({}, function(frame) {
      that.stompClient.subscribe('/message', (message) => {
        if (message.body) {
          that.msg.push(message.body);
        }
      });
    });
  }
  sendMessage(message) {
    this.stompClient.send('/app/send/message' , {}, message);
  }
}
