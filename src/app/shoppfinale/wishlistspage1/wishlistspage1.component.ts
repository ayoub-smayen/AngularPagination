import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from 'src/app/models/product';
class Favourite{
  data : '';

  products : Product[];
}
@Component({
  selector: 'app-wishlistspage1',
  templateUrl: './wishlistspage1.component.html',
  styleUrls: ['./wishlistspage1.component.scss']
})
export class Wishlistspage1Component implements OnInit {

  constructor(private http : HttpClient) { }

  URL_OP2 = "http://localhost:8091/api/favourite";
  //constructor() { }   application/json

  favourites : Favourite =new Favourite(); 
  getFavourite(){
  
    this.getAllPubblicities().subscribe((res)=>{

  this.favourites =res;


   this.products = this.favourites.products ;

   //alert(this.products);
/*
  this.favourites.products.forEach(el=>{
    alert(el.productname);
  })*/
//alert(res);
  
  console.log( this.favourites);
},
 
  err=>{
      console.error(err);
      this.favourites =err;
  }
   )

}
   products : Product[];
  getAllPubblicities():Observable<Favourite>{
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': localStorage.getItem('jwt') !== null ? 'Bearer ' + localStorage.getItem('jwt') : ''
      }),
      
    };

    return this.http.get<Favourite>(this.URL_OP2 ,httpOptions);
  }

  notifications : number  ;
  ngOnInit(): void {
    this.getFavourite();
    this.notifications  = this.favourites.products.length;
  }

}
