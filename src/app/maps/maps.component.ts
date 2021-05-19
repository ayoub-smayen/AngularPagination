import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { DeliveryManService } from '../delivery-man.service';
import { DeliveryService } from '../delivery.service';
import { DeliveryMan } from '../deliverymanmodel';

@Component({
  selector: 'app-maps',
  templateUrl: './maps.component.html',
  styleUrls: ['./maps.component.css']
})
export class MapsComponent   {
  hide=true;
  paramUrl: any;
  id1: number;
showMaps= false;
constructor( private service: DeliveryService,private activatedRoute: ActivatedRoute,private router: Router){
 // this.deliv =  DeliveryMan[];

  this.delivProche = [];
  this.paramUrl=this.activatedRoute.snapshot.params.id1;
    }

    deliv  :any;
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
  
    
    if(navigator.geolocation) {

      navigator.geolocation.getCurrentPosition(position => {
          alert(position.coords.latitude);
        this.lat  =position.coords.latitude ;
        this.lng = position.coords.longitude;
        this.getAllddiv();
        
        
       
      });
  } else {
      console.error("The browser does not support geolocation...");
  }
  
  }
  
  getAllddiv (){
    //id: Number;
   // id: any;
       const L=2.2222229;
       this.service.affectDeliveryMan(this.paramUrl).subscribe(res=>{
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



      public translate(){

        this.router.navigate(['order']);}
      }


