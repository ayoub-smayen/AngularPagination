import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';
import {  AuthService} from "../.././auth.service"
import { HttpClient,HttpHeaders } from "@angular/common/http";
//import { PushNotificationsService} from 'ng-push';
@Component({
  selector: 'app-shopnotif2',
  templateUrl: './shopnotif2.component.html',
  styleUrls: ['./shopnotif2.component.scss']
})
export class Shopnotif2Component implements OnInit {
  notifications = 0;
  messages : "";
   qrgen = false ;
   alnot1 = false ;
   alert2not=false ;
  image:any;
  pro :Product[] ; 
  constructor( private notser :  AuthService, private http : HttpClient) { 
   
    //this._pushNotifications.requestPermission();
    let stompClient = this.notser.connect();
    stompClient.connect({}, frame => {

  // Subscribe to notification topic (click)="location.reload();"
        stompClient.subscribe('/topic/notification', notifications => {
 

          this.alnot1 = true ;
          console.log("here");

          alert("see you email please 😀 ");

    // Update notifications attribute with the recent messsage sent from the server
            this.notifications = JSON.parse(notifications.body).count;
        })


        stompClient.subscribe('/topic/products', notifications => {

          console.log("here");
          this.alert2not = true;

          alert("see you email please 😀 ");

    // Update notifications attribute with the recent messsage sent from the server
            this.pro = JSON.parse(notifications.body).product1;
        })
   


    });
  }

  ngOnInit(): void {
    this.getqrcode();
  }

  getGenCode(){
    //httpOptions
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'image/jpeg;',
        'Authorization': localStorage.getItem('jwt') !== null ? 'Bearer ' + localStorage.getItem('jwt') : ''
      })
    };
    return this.http.get("http://localhost:8091/api/qr-code/1").subscribe(res=>{
      this.qrgen =true; 
      console.log(res);
    });
  }

  getqrcode(){
    this.notser.getQrcode(1).subscribe(res=>{
      console.log(JSON.stringify(res));
      this.image=JSON.parse(JSON.stringify(res));
    }
      )
  }

  notify(){ //our function to be called on click
    let options = { //set options
      body: "The truth is, I'am Iron Man!",
      icon: "assets/images/ironman.png" //adding an icon
    }
    /* this._pushNotifications.create('Iron Man', options).subscribe( //creates a notification
        res => console.log(res),    "ng-push": "^0.2.2",
        err => console.log(err)
    );*/
  }

}
