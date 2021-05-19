import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from 'src/app/models/product';

import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-brandpage',
  templateUrl: './brandpage.component.html',
  styleUrls: ['./brandpage.component.scss']
})
export class BrandpageComponent implements OnInit {

  constructor(private prodSer : ProductService,private httpclient :  HttpClient) {this.products = []; }

  ngOnInit(): void {
    this.getAllProducts();
    this.getFavourite();
  }
  addDeslikes(id:number){
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': localStorage.getItem('jwt') !== null ? 'Bearer ' + localStorage.getItem('jwt') : ''
      })
    };
      return this.httpclient.put("http://localhost:8091/api/dislike/"+ id,{},httpOptions).subscribe(res=>{
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
      return this.httpclient.put("http://localhost:8091/api/like/"+ id,{},httpOptions).subscribe(res=>{
        console.log(res);
       // this.show();
        //this.showFlash();
        window.location.href = window.location.href; 
        this.getAllProducts();
      })

  }

  term :string ;
  myproduct : string = '';
  coins : number;
  em = {

    firstName : '',
    lastName : '',
    emailAddress : ''


  };
  favourites : any;
  putFavourite(id : number){

    alert(this.favourites.favourite_id );
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': localStorage.getItem('jwt') !== null ? 'Bearer ' + localStorage.getItem('jwt') : ''
      }),
      
    };
     return this.httpclient.put("http://localhost:8091/api/affectprodfav/" + this.favourites.favourite_id +  "/" +  id , {} ,httpOptions ).subscribe

     (res=>{
       console.log(res);

       alert("you  update  your  favourite ")
     })
  }

  URL_OP2 = "http://localhost:8091/api/favourite";
  getAllPubblicities():Observable<any>{
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': localStorage.getItem('jwt') !== null ? 'Bearer ' + localStorage.getItem('jwt') : ''
      }),
      
    };

    return this.httpclient.get<any>(this.URL_OP2 ,httpOptions);
  }

  getFavourite(){

    this.getAllPubblicities().subscribe((res)=>{

  this.favourites =res;

   


  // this.products = this.favourites.products ;

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

  

  searcht(event){
    // event.preventDefault();
     //
         const httpOptions = {
           headers: new HttpHeaders({
             'Content-Type': 'application/json',
             'Authorization': localStorage.getItem('jwt') !== null ? 'Bearer ' + localStorage.getItem('jwt') : ''
           })
         };
     
     return this.httpclient.get<Product[]>(`http://localhost:8091/api/findproduct/${this.myproduct}` ).subscribe(res=>{
       this.products = res;
       console.log(res);
     
     });
     
          
       }


   addViews(id:number){
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': localStorage.getItem('jwt') !== null ? 'Bearer ' + localStorage.getItem('jwt') : ''
      })
    };
      return this.httpclient.put("http://localhost:8091/api/vues/"+ id,{},httpOptions).subscribe(res=>{
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


  products : any;
}
