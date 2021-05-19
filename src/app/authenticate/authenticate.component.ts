import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticateService } from '../authenticate.service';

@Component({
  selector: 'app-authenticate',
  templateUrl: './authenticate.component.html',
  styleUrls: ['./authenticate.component.css']
})
export class AuthenticateComponent {

  message : String ;
  msg:String = "no user";
  constructor(private service : AuthenticateService , private router : Router) { 
    this.message="";
  }
  isLoginMode = true ; 
  onSwitchMode(){
    this.isLoginMode=!this.isLoginMode;
  }
  onSubmit(form : NgForm){
   
    this.message=this.service.login(form.value);
      if(!this.isLoginMode){
         this.service.Users.push(form.value);
      }else{
         if(this.message!==""){
         
      
          
          
       
          console.log(this.message);
          this.router.navigate(['compte',this.message]);}
         }
        }
        
      }