import { Injectable } from '@angular/core';

declare var SockJS;
declare var Stomp;

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  constructor() {  //this.initializeWebSocketConnection();
  }
   stompClient;
  
 

  sendMessage(message) {
    this.stompClient.send('/app/send/message' , {}, message);
  }
}
