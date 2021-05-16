import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../Services/auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {

  message : String ;
  msg:String = "no user";
  constructor(private service : AuthService , private router : Router) { 
    this.message="";
  }
  ngOnInit(): void {
    
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
          this.router.navigate(['/home',this.message]);}
         }
        }

}
