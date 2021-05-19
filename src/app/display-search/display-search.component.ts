import { Component, OnInit } from '@angular/core';
import { DeliveryMan } from '../deliverymanmodel';
import { DeliveryManService } from '../delivery-man.service';
import { Router } from '@angular/router';

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
  name: string;
  lastname: string;
  idDeliv: any;
    constructor(private _service:DeliveryManService,private router: Router) { }
  
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
     
     public update (idDeliv){

      
      this.router.navigateByUrl('updatedeliv');
     }
  
  
    }
  
  