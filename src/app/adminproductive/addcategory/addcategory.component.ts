import { Component, OnInit } from '@angular/core';
import { CategoryService } from "../../services/category.service";
import {Category  } from "../../models/category";

import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-addcategory',
  templateUrl: './addcategory.component.html',
  styleUrls: ['./addcategory.component.scss']
})
export class AddcategoryComponent implements OnInit {


  category  : Category ;
  categories :  Category[];
  constructor(
   
    private catserv : CategoryService) {this.category = new Category();  this.categories=[];}

  ngOnInit(): void {

    this.getAllCategoreis();


  }

  getAllCategoreis(){
    this.catserv.getAllVCAtegoris().subscribe(res=>{
      console.table(res);
      this.categories=res;
    })
  }

  addcategory(){
      this.catserv.addCategory(this.category).subscribe((res: Response)=>{

        this.getAllCategoreis();
            if(res.ok){
               alert("addedd")
            }

            else alert("error  ocured");
      })
  }

  deleteBycategory(id ){
    this.catserv.deletecat(id).subscribe(res=>{
      alert("deleted ??");
      
    })
  }

}
