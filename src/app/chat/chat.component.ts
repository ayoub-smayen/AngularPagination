import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ChatMessageDTO } from '../Model/chat-message-dto';
import { User } from '../Model/user';
import { PublicationService } from '../Services/publication.service';
import { WebsocketService } from '../Services/websocket.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {
  user:User;
  users:number[] = [1,2,3,4];
  paramurl:any;
  date : Date;
  messages:any;
  constructor(public webSocketService: WebsocketService,
    private service : PublicationService,
    private Activated:ActivatedRoute) { 
      
    }

  ngOnInit(): void {
    this.webSocketService.openWebSocket();
    this.paramurl = this.Activated.snapshot.params.id;
  
    
  }

  ngOnDestroy(): void {
    this.webSocketService.closeWebSocket();
  }

  sendMessage() {
    this.date=new Date();
    //this.service.getUserByID(Math.floor(Math.random()*this.users.length)).subscribe((res:User)=> this.user = res);
    this.service.getUserByname(this.paramurl).subscribe((res:User)=>{
      this.user = res;
      const chatMessageDto = new ChatMessageDTO(this.user.user_name,this.user.user_Lastname,this.user.img,this.date, this.messages);
    this.webSocketService.sendMessage(chatMessageDto);
    this.messages = '';
    });
  }

}
