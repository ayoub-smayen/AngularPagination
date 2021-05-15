import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }
  @ViewChild('status') status: ElementRef;
  @ViewChild('maplink') mapLink: ElementRef;
  ngOnInit(): void {
  }


  geoFindMe() {

    
  
    this.mapLink.nativeElement.href = '';
    this.mapLink.nativeElement.textContent = '';

    if(!navigator.geolocation) {
     this.status.nativeElement.textContent = 'Geolocation is not supported by your browser';
    } else {
      this.status.nativeElement.textContent = 'Locating…';
      navigator.geolocation.getCurrentPosition(this.success, this.error);
    }
  
  }
  success(position) {
    const latitude  = position.coords.latitude;
    const longitude = position.coords.longitude;

    this.status.nativeElement.textContent = '';
    this.mapLink.nativeElement.href = `https://www.openstreetmap.org/#map=18/${latitude}/${longitude}`;
    this.mapLink.nativeElement.textContent = `Latitude: ${latitude} °, Longitude: ${longitude} °`;
  }
  error() {
    this.status.nativeElement.textContent  = 'Unable to retrieve your location';
  }
 

}
