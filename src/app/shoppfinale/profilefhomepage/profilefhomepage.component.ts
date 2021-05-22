import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from 'src/app/models/product';
import { AuthService } from 'src/app/services/auth.service';
import { ProductService } from 'src/app/services/product.service';


 

export class ChatMessageDTO {
  user_name: string;
  user_lastname:string;
  img:any;
  date:Date = new Date();
  message: string;

  constructor(user_name: string,user_lastname:string,img:any,date:Date, message: string){
      this.user_name = user_name;
      this.user_lastname = user_lastname;
      this.img = img;
      this.date = date;
      this.message = message;
  }
}

@Component({
  selector: 'app-profilefhomepage',
  templateUrl: './profilefhomepage.component.html',
  styleUrls: ['./profilefhomepage.component.scss']
})
export class ProfilefhomepageComponent implements OnInit {



  webSocket: WebSocket;
  
  chatMessages: ChatMessageDTO[] = [];
  
  constructor(private  authService :  AuthService, private router :Router,
    private prodSer : ProductService,private httpclient :  HttpClient,
    
    ) { }
  isLoggedIn: boolean;
  profs: any;


  ngOnInit(): void {

    this.openWebSocket();
    //this.paramurl = this.Activated.snapshot.params.id

    this.getPrifile();
  }
  getPrifile(){
    this.authService.getprofile().subscribe(res=>{
      console.log(res);
      //alert(res);
      this.profs=res;
    })
  }


  //user:User;
  users:number[] = [1,2,3,4];
  paramurl:any;
  date : Date;
  messages:any;


  public opened = true;
  public dataSaved = false;

  public close() {
    this.opened = false;
  }

  public open() {
    this.opened = true;
  }

  public submit() {
    this.dataSaved = true;
    this.close();
  }


  public openWebSocket(){
    this.webSocket = new WebSocket('ws://localhost:8091/chat');
  
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


 
  sendMessage2() {
    this.date=new Date();
    //this.service.getUserByID(Math.floor(Math.random()*this.users.length)).subscribe((res:User)=> this.user = res);
   
      const chatMessageDto = new ChatMessageDTO(this.profs.username,this.profs.email,this.profs.lprofile.picprofile,this.date, this.messages);
    this.sendMessage(chatMessageDto);
    this.messages = '';
    
  }
    
  
}
