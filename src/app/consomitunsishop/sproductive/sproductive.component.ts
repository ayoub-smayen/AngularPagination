import { Component, OnInit } from '@angular/core';
import {HttpClient, HttpHeaders}  from "@angular/common/http"




@Component({
  selector: 'app-sproductive',
  templateUrl: './sproductive.component.html',
  styleUrls: ['./sproductive.component.scss']
})
export class SproductiveComponent implements OnInit {

  constructor(private http  : HttpClient) { }



  URL_PUB  ="http://localhost:8091/api1/userpub";
pub  :any;
  ngOnInit(): void {

    this.getPublictyqUser();
  }   



     getPublictyqUser(){

      const httpOptions = {
        headers: new HttpHeaders({
          'Content-Type': 'application/json',
          'Authorization': localStorage.getItem('jwt') !== null ? 'Bearer ' + localStorage.getItem('jwt') : ''
        }),
        
      };
  

       return   this.http.get(this.URL_PUB,httpOptions).subscribe(ress=>{

        alert(ress);

        this.pub =ress;
       })



   

     
         
         
     }

}
