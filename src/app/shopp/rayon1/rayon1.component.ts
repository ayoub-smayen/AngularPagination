import { Component, OnInit } from '@angular/core';
import { RayonService } from "../../services/rayon.service";
import {Rayon  } from "../../models/rayon";
@Component({
  selector: 'app-rayon1',
  templateUrl: './rayon1.component.html',
  styleUrls: ['./rayon1.component.scss']
})
export class Rayon1Component implements OnInit {


  rayons : Rayon[];
  rayonsid : Rayon;
  constructor(private ray :  RayonService) { this.rayons=[];}

  ngOnInit(): void {
    this.getAllrayon();
  }

  getAllrayon(){
      this.ray.getRayon().subscribe(res=>{
        console.log(res);
        this.rayons =res;
         //window.history.back();
        // window.location.reload();
      })
  }

  getRayounByid(id:number){

    this.ray.getRayonByid(id).subscribe(res=>{
      console.log(res);
      this.rayonsid  =res;
    })

  }
}
