import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { MessageService } from 'src/app/services/message.service';

declare var SockJS;
declare var Stomp;

@Component({
  selector: 'app-forums',
  templateUrl: './forums.component.html',
  styleUrls: ['./forums.component.scss']
})
export class ForumsComponent implements OnInit {
  input;
  constructor(public messageService: MessageService,private authService: AuthService) {this.messages=[]; this.initializeWebSocketConnection(); }
username :string;
 stompClient;
date  : Date;

public msg = [];
initializeWebSocketConnection() {
  const serverUrl = 'http://localhost:8082/socket';
  const ws = new SockJS(serverUrl);
  this.stompClient = Stomp.over(ws);
  const that = this;
  // tslint:disable-next-line:only-arrow-functions
  this.stompClient.connect({}, function(frame) {
    that.stompClient.subscribe('/message', (message) => {
      alert(message);
      if (message.body) {
        that.msg.push(message.body);
      }
    });
  });
}

  
  ngOnInit(): void {
   

    this.username = this.authService.getLoggedInUser();

    this.authService.loginSubject.asObservable().subscribe(() => {
    //  this.isLoggedIn = this.authService.isLoggedIn();
      this.username = this.authService.getLoggedInUser();
    });
  }


  send(message) {
    this.stompClient.send('/app/send/message' , {}, message);
  }
  messages:  string[];
  sendMessage() {
    if (this.input) {
      this.send(this.input);
      this.messages.push(this.input);
alert("sending");
      this.date  =new Date();
      this.input = '';
    }
  }
}
