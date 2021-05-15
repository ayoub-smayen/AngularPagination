import { Component, OnInit } from '@angular/core';
import { DeliveryManService } from '../delivery-man.service';
import { DeliveryMan } from '../deliverymanmodel';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  listDeliveryMan: DeliveryMan[];
  deliveryMan: DeliveryMan;
  constructor(private service: DeliveryManService) { }
  public getlistofdeliveryman(){
    let resp= this.service.getListDeliveryMan();
    resp.subscribe((res)=>this.listDeliveryMan=res);
   }
  ngOnInit(): void {
    let resp=this.service.getListDeliveryMan();
      resp.subscribe((res)=>this.listDeliveryMan=res);
  
  }

}
