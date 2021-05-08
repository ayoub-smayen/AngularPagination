import { Component, OnInit } from '@angular/core';
import { DeliveryMan } from '../deliverymanmodel';
import { DeliveryManService } from '../delivery-man.service';

@Component({
  selector: 'app-display-search',
  templateUrl: './display-search.component.html',
  styleUrls: ['./display-search.component.css']
})
export class DisplaySearchComponent implements OnInit {
  deliveryMan: DeliveryMan;
  message: any;
  listDeliveryMan: any;
  id: number;
  lastname: string;
    constructor(private _service:DeliveryManService) { }
  
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
  
  