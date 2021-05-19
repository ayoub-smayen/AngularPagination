import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Component({
  selector: 'app-forumspage1',
  templateUrl: './forumspage1.component.html',
  styleUrls: ['./forumspage1.component.scss']
})
export class Forumspage1Component implements OnInit {

  constructor(private  http :HttpClient) { }

  ngOnInit(): void {
    this.getPub();

  }



  pub:any    ;


  getPub(){

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': localStorage.getItem('jwt') !== null ? 'Bearer ' + localStorage.getItem('jwt') : ''
      })
    };

    return    this.http.get("http://localhost:8091/pcom/RetrievePublication",httpOptions).subscribe(res=>{

        
       this.pub  =res ;
alert(res);
       
    })

  }



}
