import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';
import {AdsenceService  } from "../../services/adsence.service";

@Component({
  selector: 'app-adsences',
  templateUrl: './adsences.component.html',
  styleUrls: ['./adsences.component.scss']
})
export class AdsencesComponent implements OnInit {

  constructor(private httpAds  : AdsenceService ) { 
    this.productsPub = [];
  }
   publicities : any ;

   productsPub : Product[];

  ngOnInit(): void {

    this.getAllpubx();
  }


  getAllpubx(){
     this.httpAds.getAllPubblicities().subscribe(res=>{
       this.publicities = res;

       console.log(res);

       this.publicities.forEach(r=>{
         alert(r);
       })

      
      

     });


}

}