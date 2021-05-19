import { Component, OnInit } from '@angular/core';
import { Deliveryman } from 'src/app/models/deliveryman';
import { DeliverymanService } from 'src/app/services/deliveryman.service';

@Component({
  selector: 'app-delivprofilepage',
  templateUrl: './delivprofilepage.component.html',
  styleUrls: ['./delivprofilepage.component.scss']
})
export class DelivprofilepageComponent implements OnInit {

 /* constructor() { }

  ngOnInit(): void {
  }
*/

listDeliveryMan: Deliveryman[];
deliveryMan: Deliveryman;
constructor(private service: DeliverymanService) { }
public getlistofdeliveryman(){
  let resp= this.service.getListDeliveryMan();
  resp.subscribe((res)=>this.listDeliveryMan=res);
 }
ngOnInit(): void {
  let resp=this.service.getListDeliveryMan();
    resp.subscribe((res)=>this.listDeliveryMan=res);

}

}
