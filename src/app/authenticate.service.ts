import { Injectable } from "@angular/core";
import { User } from "./user";


@Injectable({
    providedIn: 'root'
  })
export class AuthenticateService{
    name:String;
    Users : User[]=[new User('yasmine', 'yasmine','njim','123456','yasmine.njim@esprit.tn')];  
constructor(
){
    this.name="";
   
}
public login(u:User){
    for(var item of this.Users){
        if ((item.email==u.email)&&(item.password==u.password))
        {
            this.name= item.userName;
        console.log("message")};
    }return this.name; }}