import { Component, OnInit } from '@angular/core';
import { Euser } from '../models/euser';
import { EuserserviceService } from '../services/euserservice.service';
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})


export class SearchComponent implements OnInit {
  users:any;
  id:any;
 email:string;
 euser_id:any;
 membre_username:string;
 password:string;
 euser:Euser;
  constructor(private service:EuserserviceService) { }

public deleteUser(id:number){
 let resp= this.service.delete(id);
 resp.subscribe((data)=>this.users=data);
}

public updateUser(id:number, euser: Euser){
  let resp= this.service.update(id,euser);
  resp.subscribe((data)=>this.users=data);
 }

public findUserById(){
  let resp= this.service.getById(this.id);
  resp.subscribe((data)=>this.users=data);
 }

 ngOnInit(): void {
  let resp=this.service.getAllUsers();
  resp.subscribe((data)=>this.users=data);
}

}

