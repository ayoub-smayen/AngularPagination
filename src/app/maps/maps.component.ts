import { Component, OnInit } from '@angular/core';

import { DeliveryManService } from '../delivery-man.service';
import { DeliveryMan } from '../deliverymanmodel';

@Component({
  selector: 'app-maps',
  templateUrl: './maps.component.html',
  styleUrls: ['./maps.component.css']
})
export class MapsComponent   {



constructor( private mdeliv : DeliveryManService){
  this.deliv = [];

  this.delivProche = [];

    }
  


    deliv  : DeliveryMan[];
    delivProche: DeliveryMan[];
    title = 'Angular Google Maps Example';
     /*public delivery:Delivery[];
     constructor(){
      this.delivery=[];
     }*/
    lat ;// = 37.19253098875548; 
    lng; //= 10.200277009508092;
    locationChosen = false;
  public ngOnInit():void {
  
    this.getAllddiv();
    if(navigator.geolocation) {

      navigator.geolocation.getCurrentPosition(position => {
          alert(position.coords.latitude);
        this.lat  =position.coords.latitude ;
        this.lng = position.coords.longitude
        
        
       
      });
  } else {
      console.error("The browser does not support geolocation...");
  }
  
  }
  
  getAllddiv (){
       const L=2.2222229;
       this.mdeliv.getListDeliveryMan().subscribe(res=>{
             alert(res);
  
             this.deliv = res ;




             this.deliv.forEach(el=>{
if (Math.abs(this.lng-el.lngi)<=L && Math.abs(this.lat-el.lati)<=L){

  this.delivProche.push(el);


}


             })
             alert(this.delivProche);

       })
  
       
  }


}
