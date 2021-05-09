import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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
 user_id:any;
 membre_username:string;
 password:string;
 euser:any;
 user:Euser;
 message = '';
 currentTutorial = null;
  constructor(private service:EuserserviceService,private route: ActivatedRoute, 
    private router: Router) { }

public deleteUser(id:number){
 let resp= this.service.delete(id);
 resp.subscribe((data)=>this.users=data);
}

/*public updateUser(id:number, user: Euser){
  let resp= this.service.update(id,user);
  resp.subscribe((data)=>this.users=data);
 }*/

public findUserById(id){


   if(id == null){

    let resp=this.service.getAllUsers();
    resp.subscribe((data)=>this.users=data);

   }


  let resp= this.service.getById(id);
  
  resp.subscribe((data)=>{this.euser=data  ; this.users = null;     ;  console.table(data)});

    /* this.users =  this.users.forEach(element => {

        
       
     });*/
 }
 /*public findUserByIdd(){
  let resp= this.service.getUser();
  resp.subscribe((data)=>this.users=data);
 }*/
 
 ngOnInit(): void {
  let resp=this.service.getAllUsers();
  resp.subscribe((data)=>this.users=data);
  //this.getTutorial(this.route.snapshot.paramMap.get('id'));
}


/*getTutorial(id): void {
  this.catserv.getatbyid(id)
    .subscribe(
      data => {
        const fg = data; 
        this.category = fg.cv;
        console.log(data);
        alert(data);
      },
      error => {
        console.log(error);
      });
}*/


}
