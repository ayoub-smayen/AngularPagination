import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { AuthService } from 'src/app/auth.service';
import { Product } from 'src/app/models/product';

import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-specialhomepage',
  templateUrl: './specialhomepage.component.html',
  styleUrls: ['./specialhomepage.component.scss']
})
export class SpecialhomepageComponent implements OnInit {

  /*constructor() { }

  ngOnInit(): void {
  }*/

  searchprod ='';



getSearchable(event){
    console.log(event);
  this.searchprod = event.target.value;
  event.preventDefault();
  return this.http.getProductSearchable(this.searchprod).subscribe(res=>{
  console.log(res);
  this.products= res;



  
  
});

}
  products : Product[] = [];
  products2 : Product[]   = []
  image_io : any[];
  notifications = 0;
  constructor(private httpclient : HttpClient,private notser :  AuthService,private http : ProductService,private sanitizer:DomSanitizer) {this.image_io=[];

    this.config = {
      itemsPerPage: 2,
      currentPage: 1,
      totalItems: this.products.length
    };
  
    let stompClient = this.notser.connect();
    stompClient.connect({}, frame => {

  // Subscribe to notification topic (click)="location.reload();"
        stompClient.subscribe('/topic/notification', notifications => {

          console.log("here");

    // Update notifications attribute with the recent messsage sent from the server
            this.notifications = JSON.parse(notifications.body).count;
        })
    });
}
config: any;
  
  
term: string;

 // }
//'data:image/jpeg;base64,'+prod.productImg
  ngOnInit(): void {
    this.getProducts();
    this.getAllProductsTunis();
  }

  getAllProductsTunis(){
    this.http.getAllproducts2().subscribe(res=>{
      console.log(res);
          this.products2=res;
    });
  }

  pageChanged(event){
    this.config.currentPage = event;
  }




  addLikes(id:number){
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': localStorage.getItem('jwt') !== null ? 'Bearer ' + localStorage.getItem('jwt') : ''
      })
    };
      return this.httpclient.put("http://localhost:8091/api/like/"+ id,{},httpOptions);

  }
  pdfSrc = "http://localhost:8091/api/pdfreportp";

  
  getProducts(){
    this.http.getAllproducts().subscribe(res=>{
      this.products=res;


      /*  for(let p of this.products){
         // p.price +=2;
         this.image_io.push(this.sanitizer.bypassSecurityTrustResourceUrl(p.productImg));
          
        }
        console.log(this.image_io);

        for (let i= 0; i< this.products.length;i++){
          this.products[i].productImg = this.sanitizer.bypassSecurityTrustResourceUrl('data:image/jpeg;base64,'+ this.products[i].productImg);
        }
*/
       

     /* this.products.forEach(el=>{
        //el.price = el.price+1;
        this.sanitizer.bypassSecurityTrustResourceUrl(el.productImg);
      })*/

     /* this.products.forEach(el=>{
        el.productImg =    "'data:image/jpeg;base64,'"+ el.productImg ;
      })*/
    });
  }

}
