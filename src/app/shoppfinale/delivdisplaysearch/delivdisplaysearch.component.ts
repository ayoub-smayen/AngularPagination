import { Component, OnInit } from '@angular/core';
import { Deliveryman } from 'src/app/models/deliveryman';
import { DeliverymanService } from 'src/app/services/deliveryman.service';

@Component({
  selector: 'app-delivdisplaysearch',
  templateUrl: './delivdisplaysearch.component.html',
  styleUrls: ['./delivdisplaysearch.component.scss']
})
export class DelivdisplaysearchComponent implements OnInit {
  deliveryMan: Deliveryman;
  message: any;
  listDeliveryMan: any;
  id: number;
  lastname: string;
    constructor(private _service:DeliverymanService) { }
  
    ngOnInit(): void {
      let resp=this._service.getListDeliveryMan();
      resp.subscribe((res)=>this.listDeliveryMan=res);
  
    }
   
    public getlistofdeliveryman(){
      let resp= this._service.getListDeliveryMan();
      resp.subscribe((res)=>this.listDeliveryMan=res);
     }
     public deletedeliv(id:number){
       let resp=this._service.deleteDeliveryMan(id);
       resp.subscribe((res)=>this.listDeliveryMan=res);
  
       }
  
       public searchByid(){
  let resp=this._service.findDeliveryManbyId(this.id);
  resp.subscribe((data)=>this.message=data);
  
       }
       public searchByLastName(){
        let resp=this._service.searchbylastname(this.lastname);
        resp.subscribe((data)=>this.listDeliveryMan=data);
        
             }
     

}
