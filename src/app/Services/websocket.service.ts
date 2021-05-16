import { Injectable } from '@angular/core';
import { ChatMessageDTO } from '../Model/chat-message-dto';

@Injectable({
  providedIn: 'root'
})
export class WebsocketService {

  webSocket: WebSocket;
  
  chatMessages: ChatMessageDTO[] = [];
  
  constructor() { }
  
  public openWebSocket(){
    this.webSocket = new WebSocket('ws://localhost:8080/chat');
  
    this.webSocket.onopen = (event) => {
      console.log('Open: ', event);
    };
  
    this.webSocket.onmessage = (event) => {
      const chatMessageDto = JSON.parse(event.data);
      this.chatMessages.push(chatMessageDto);
    };
  
    this.webSocket.onclose = (event) => {
      console.log('Close: ', event);
    };
  }
  
  public sendMessage(chatMessageDto: ChatMessageDTO){
    this.webSocket.send(JSON.stringify(chatMessageDto));
  }
  
  public closeWebSocket() {
    this.webSocket.close();
  }
}
