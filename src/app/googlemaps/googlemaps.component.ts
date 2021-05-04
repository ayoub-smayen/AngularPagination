import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-googlemaps',
  templateUrl: './googlemaps.component.html',
  styleUrls: ['./googlemaps.component.css']
})
export class GooglemapsComponent implements OnInit {
  lat: number = 35.506623464745104;
  lng: number = 11.027577681755126;
  
  constructor() { }

  ngOnInit(): void {
  }

}
