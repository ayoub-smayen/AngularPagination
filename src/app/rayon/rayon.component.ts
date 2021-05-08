import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Category } from '../model/category';
import { RayService } from '../services/ray.service';

@Component({
  selector: 'app-rayon',
  templateUrl: './rayon.component.html',
  styleUrls: ['./rayon.component.css']
})
export class RayonComponent implements OnInit {
  cat:String[];

  paramurl:any;
  constructor(private activatedroute: ActivatedRoute,private service:RayService) { }

  ngOnInit(): void {
    this.paramurl = this.activatedroute.snapshot.params['id'];
    this.service.getcat(this.paramurl).subscribe((res:String[])=> this.cat = res);
  }

}
