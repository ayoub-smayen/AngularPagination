import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DeliveryService } from '../delivery.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {

  constructor(private service: DeliveryService,private router: Router,private activated : ActivatedRoute) { }

  ngOnInit(): void {
    this.paramurl = this.activated.snapshot.params.name1;
  }
  paramurl:any;
id1: number;
  public affect(){

    
  
    let resp= this.service.affectDeliveryMan(this.id1);
    resp.subscribe(()=> this.service.notify(this.paramurl).subscribe());
    
    this.router.navigate(['maps',this.id1]);}
  
    
   }



  

