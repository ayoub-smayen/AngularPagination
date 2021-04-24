import { Component, OnInit } from '@angular/core';
import {ProductService } from "../.././services/product.service";

@Component({
  selector: 'app-clothespage',
  templateUrl: './clothespage.component.html',
  styleUrls: ['./clothespage.component.scss']
})
export class ClothespageComponent implements OnInit {

  constructor(private http : ProductService) { }

  ngOnInit(): void {
    this.getNotif();
  }


  fg1 : any;
  fg :number;

  getNotif(){
    this.http.getColisenattend().subscribe(res=>{
               this.fg1 =res;
              console.log(res);
              alert(res);
               this.fg = this.fg1.length ;
    });
  }
}
