import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/models/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-proddetailspage',
  templateUrl: './proddetailspage.component.html',
  styleUrls: ['./proddetailspage.component.scss']
})
export class ProddetailspageComponent implements OnInit {

  constructor(private  route: ActivatedRoute,private http :ProductService,private httpclient : HttpClient) { }
  product1 : Product;
  products : Product[];
  ngOnInit(): void {

    

    this.getTutorial(this.route.snapshot.paramMap.get('id'));
    this.getAllproducts();
  }
  myComment = {
    title:  '',
    bodyComment : ''
    };
  getAllproducts(){
    this.http.getAllproducts2().subscribe(res=>{

       this.products = res ;

       console.log(res);
    })
}
submit(id:number) {
  const httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': localStorage.getItem('jwt') !== null ? 'Bearer ' + localStorage.getItem('jwt') : ''
    })
  };
    return this.httpclient.post("http://localhost:8091/api/addComment/"+ id,this.myComment,httpOptions).subscribe(res=>{
      console.log(res);
      this.getAllproducts();

      window.location.href  =window.location.href;
     
    })
    
  
}
getTutorial(id): void {
 this.http.getAllproducts3(id)
   .subscribe(
     data => {
       const fg = data; 
       this.product1 = fg;
       console.log(data);
       alert(data);
       
     },
     error => {
       console.log(error);
     });
}

}
