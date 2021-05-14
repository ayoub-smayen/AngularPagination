import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from 'src/app/models/product';


class Favourite{
  data : '';

  products : Product[];
}
@Component({
  selector: 'app-favourite',
  templateUrl: './favourite.component.html',
  styleUrls: ['./favourite.component.scss']
})
export class FavouriteComponent implements OnInit {

  constructor(private   http :  HttpClient) { }

  ngOnInit(): void {



    this.getFavourite();
  }


  URL_OP2 = "http://localhost:8091/api/favourite";
  //constructor() { }   application/json


   favourites : any; 
  getAllPubblicities():Observable<any>{
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': localStorage.getItem('jwt') !== null ? 'Bearer ' + localStorage.getItem('jwt') : ''
      }),
      
    };

    return this.http.get<any>(this.URL_OP2 ,httpOptions);
  }


  async getFavourite(){

    await   this.getAllPubblicities().subscribe((res)=>{

     this.favourites =res;
alert(res);
     
     console.log( this.favourites);
   },
    
     err=>{
         console.error(err);
         this.favourites =err;
     }
      )

 }

}
