import { Component, OnInit } from '@angular/core';
import {CategoryService  } from "../.././services/category.service";
import { Category } from "../.././models/category";
@Component({
  selector: 'app-template2',
  templateUrl: './template2.component.html',
  styleUrls: ['./template2.component.scss']
})
export class Template2Component implements OnInit {

  constructor(private http : CategoryService) { this.categories=[];}

  categories :Category[] ;
  ngOnInit(): void {
    this.getScategories();
  }

  getScategories(){
    this.http.getAllVCAtegoris().subscribe(res=>{
      console.log(res);
      this.categories=res;
      alert(res);
    });
  }

}
