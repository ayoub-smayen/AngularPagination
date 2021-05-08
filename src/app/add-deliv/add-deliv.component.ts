import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Address } from '../Address';
import { DeliveryManService } from '../delivery-man.service';
import { DeliveryMan } from '../deliverymanmodel';
import { Shop } from '../Shop';

@Component({
  selector: 'app-add-deliv',
  templateUrl: './add-deliv.component.html',
  styleUrls: ['./add-deliv.component.css']
})
export class AddDelivComponent implements OnInit {
  

  name: string;
  lastName: string;
  photo: any;
  disponibility: any;
  email: string;
  salaire: number;
  addressline1: string;
  addressline2: string;
  number: string;
  postcode: string;
  latitude: any ;
  longitude: any ;
  shopname: string;
  transport: string;
  workLoad: any= 0;
  
  
  constructor(private _service:DeliveryManService,private router: Router ) { }



  public adddeliv(){
    let deliv=new DeliveryMan; 
   
    deliv.deliveryMan_Name=this.name;
    deliv.deliveryMan_lastName=this.lastName;
    deliv.delivery_phot=this.photo;
    deliv.dispoDeliv=this.disponibility;
    deliv.email=this.email;
    deliv.salaire=this.salaire;
    
    deliv.transport=this.transport;
    deliv.workLoad=this.workLoad;

    let resp= this._service.addDeliveryMan(deliv);
    resp.subscribe();
    
      this.router.navigateByUrl('List of delivery man');
 
    
   }
  ngOnInit(): void {
    
  }

}
