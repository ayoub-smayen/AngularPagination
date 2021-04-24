import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shoppmap',
  templateUrl: './shoppmap.component.html',
  styleUrls: ['./shoppmap.component.scss']
})
export class ShoppmapComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  lat: number = 51.678418;
  lng: number = 7.809007;

}
