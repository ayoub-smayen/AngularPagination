import { Component, OnInit } from '@angular/core';
import { Product } from "../../models/product";
import { ProductService } from "../../services/product.service";

import { ActivatedRoute, ParamMap } from '@angular/router';
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  constructor(private  route: ActivatedRoute,private http :ProductService) {this.products =[]; }
  products :  Product[];
product1 : Product;
  id: number;
  private sub: any;
  navUrl: string ;
  shareUrl:string;
  searchParams = new URLSearchParams();


  ngOnInit(): void {
this.shareUrl="http://localhost:4200/product/"+this.route.snapshot.paramMap.get('id');
    this.searchParams.set('u', this.shareUrl);
    this.navUrl = 'https://www.facebook.com/sharer/sharer.php?' + this.searchParams;
   /* this.sub = this.route.params.subscribe(params => {
      this.id = +params['id']; 

      // In a real app: dispatch action to load the details here.
   });
    this.getAllproducts();*/

    this.getTutorial(this.route.snapshot.paramMap.get('id'));
  }

   getAllproducts(){
       this.http.getAllproducts2().subscribe(res=>{

          this.products = res ;

          console.log(res);
       })
   }
   public share() {
    return window.open(this.navUrl, "_blank");
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
