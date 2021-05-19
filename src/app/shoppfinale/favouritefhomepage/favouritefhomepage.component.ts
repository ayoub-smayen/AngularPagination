import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from 'src/app/models/product';
import { ProductService } from 'src/app/services/product.service';


class Favourite{
  data : '';

  products : Product[];
}

@Component({
  selector: 'app-favouritefhomepage',
  templateUrl: './favouritefhomepage.component.html',
  styleUrls: ['./favouritefhomepage.component.scss']
})
export class FavouritefhomepageComponent implements OnInit {

 /* constructor() { }

  ngOnInit(): void {
  }*/

  constructor(private http : HttpClient,private prodSer : ProductService) {this.products = []; }

  // this.favourites = null;
    URL_OP2 = "http://localhost:8091/api/favourite";
    //constructor() { }   application/json
  
  
     favourites : Favourite =new Favourite(); 
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
  
  
    ngOnInit() {
  
      this.getFavourite();
    }
    //favourite
     getFavourite(){
  
          this.getAllPubblicities().subscribe((res)=>{
  
        this.favourites =res;
  
  
         this.products = this.favourites.products ;
  
         //alert(this.products);
  
        /*this.favourites.products.forEach(el=>{
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


    addViews(id:number){
      const httpOptions = {
        headers: new HttpHeaders({
          'Content-Type': 'application/json',
          'Authorization': localStorage.getItem('jwt') !== null ? 'Bearer ' + localStorage.getItem('jwt') : ''
        })
      };
        return this.http.put("http://localhost:8091/api/vues/"+ id,{},httpOptions).subscribe(res=>{
          console.log(res);
        //  this.show();
          //this.showFlash();
          window.location.href = window.location.href; 
          this.getAllProducts();
        })
  
    }
  
    getAllProducts(){
      this.prodSer.getAllproducts().subscribe(res=>{
        console.log(res);
        this.products = res;
        //alert(res);
      //  window.location.href = window.location.href; 
      })
  }

    addDeslikes(id:number){
      const httpOptions = {
        headers: new HttpHeaders({
          'Content-Type': 'application/json',
          'Authorization': localStorage.getItem('jwt') !== null ? 'Bearer ' + localStorage.getItem('jwt') : ''
        })
      };
        return this.http.put("http://localhost:8091/api/dislike/"+ id,{},httpOptions).subscribe(res=>{
          console.log(res);
         // this.show();
         window.location.href = window.location.href; 
          this.getAllProducts();
        })
    }
  
    myComment = {
      title:  '',
      bodyComment : ''
      };
    addLikes(id:number){
      const httpOptions = {
        headers: new HttpHeaders({
          'Content-Type': 'application/json',
          'Authorization': localStorage.getItem('jwt') !== null ? 'Bearer ' + localStorage.getItem('jwt') : ''
        })
      };
        return this.http.put("http://localhost:8091/api/like/"+ id,{},httpOptions).subscribe(res=>{
          console.log(res);
         // this.show();
          //this.showFlash();
          window.location.href = window.location.href; 
          this.getAllProducts();
        })
  
    }

}
