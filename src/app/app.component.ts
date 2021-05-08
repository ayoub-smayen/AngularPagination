import { Component, OnInit } from '@angular/core';
import { Ray } from './model/ray';
import { RayService } from './services/ray.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'MyFrontProject';

  ray!: Ray[];
  constructor(private service : RayService){

  }

  ngOnInit(): void {
    this.service.getRayons().subscribe(
      (res:Ray[]) => this.ray = res
    );}
}
