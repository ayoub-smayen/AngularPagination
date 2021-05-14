import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ray',
  templateUrl: './ray.component.html',
  styleUrls: ['./ray.component.scss']
})
export class RayComponent implements OnInit {

  constructor( private  http  :  HttpClient ) { }

  ngOnInit(): void {

    this.getAllRayon();
    
  }
  
  rayons :any  ;
  getAllRayon(){

       return  this.http.get("http://localhost:8091/api/rayons1").subscribe(res=>{
              this.rayons  =res ;
       })
  }

     
}
