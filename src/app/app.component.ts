import { Component } from '@angular/core';
import { MessageserviceService } from './Services/messageservice.service';
import { Websocketapi } from './Services/websocketapi';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'MyFrontProject';
  /*input;
  constructor(public messageService: MessageserviceService) {}
  sendMessage() {
    if (this.input) {
      this.messageService.sendMessage(this.input);
      this.input = '';
    }
  }*/

  webSocketAPI: Websocketapi;
  greeting: any;
  name: string;
  ngOnInit() {
    this.webSocketAPI = new Websocketapi(new AppComponent());
  }

  connect(){
    this.webSocketAPI._connect();
  }

  disconnect(){
    this.webSocketAPI._disconnect();
  }

  sendMessage(){
    this.webSocketAPI._send(this.name);
  }

  handleMessage(message){
    this.greeting = message;
  }
}
