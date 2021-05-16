import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AppComponent } from '../app.component';
import { Websocketapi } from '../Services/websocketapi';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private Activated: ActivatedRoute) { }

  
  /*input;
  constructor(public messageService: MessageserviceService) {}
  sendMessage() {
    if (this.input) {
      this.messageService.sendMessage(this.input);
      this.input = '';
    }
  }*/
paramurl:any;
  webSocketAPI: Websocketapi;
  greeting: any;
  name: string;
  ngOnInit() {
    this.webSocketAPI = new Websocketapi(new AppComponent());
    this.paramurl = this.Activated.snapshot.params.id;
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

  /*handleMessage(message){
    this.greeting = message;
  }*/
}
