import { Component, OnInit , Input } from '@angular/core';
import { Product } from "../../models/product";
import { ProductService } from "../../services/product.service";

import { Category } from "../../models/category";
import { CategoryService } from "../../services/category.service";
import { Router } from '@angular/router';
@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.scss']
})
export class StoreComponent implements OnInit {

  /*constructor() { }

  ngOnInit(): void {
  }
*/

constructor(private  router : Router,private http :ProductService  ,  private catserv : CategoryService) {this.products =[];  this.categories =[]; }
products :  Product[];
@Input() term: string;
categories : Category[] ; 
ngOnInit(): void {
  this.getAllproducts();
  this.getAllCategories();
}
  getAllCategories(){
      return this.catserv.getAllVCAtegoris().subscribe(res=>{
         this.categories  =res ;
      })
  }
 getAllproducts(){
     this.http.getAllproducts2().subscribe(res=>{

        this.products = res ;

        console.log(res);
     })
 }

 df(){
          window.location.href = window.location.href;
 }

 surfTo(id:number){
   this.router.navigate(['/product',id]);

 }
}
