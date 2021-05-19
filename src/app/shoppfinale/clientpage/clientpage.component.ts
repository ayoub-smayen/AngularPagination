import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-clientpage',
  templateUrl: './clientpage.component.html',
  styleUrls: ['./clientpage.component.scss']
})
export class ClientpageComponent implements OnInit {

  constructor(private prodSer : ProductService,private httpclient :  HttpClient) {this.products = []; }

  ngOnInit(): void {
    this.getAllProducts();
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
        this.getAllProducts();
      })

  }
  public opened = true;
  public dataSaved = false;

  public close() {
    this.opened = false;
  }

  public open() {
    this.opened = true;
  }

  public submit() {
    this.dataSaved = true;
    this.close();
  }
  
  myproduct : string = '';
  coins : number;
  em = {

    firstName : '',
    lastName : '',
    emailAddress : ''


  };

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
        this.getAllProducts();
      })

  }

  getAllProducts(){
    this.prodSer.getAllproducts().subscribe(res=>{
      console.log(res);
      this.products = res;
      //alert(res);
    })
}


  products : Product[];
    
}
