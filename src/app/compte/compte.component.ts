import { Component, OnInit } from '@angular/core';
import { DeliveryManService } from '../delivery-man.service';

@Component({
  selector: 'app-compte',
  templateUrl: './compte.component.html',
  styleUrls: ['./compte.component.css']
})
export class CompteComponent implements OnInit {

hide=true;
lat: any;
lng: any;
showMaps=false;
  constructor(private service : DeliveryManService) { }

  ngOnInit(): void {
  }
id: any;
  public updatebutton(id: number){
    let resp= this.service.updatedispWorkload(id);
    resp.subscribe();
    this.hide=!this.hide;
this.showMaps=!this.showMaps;
  }


}
