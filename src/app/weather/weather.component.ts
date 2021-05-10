import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {

 //weather
 private appId: string;
 private appCode: string;

 public weather: any;

 public constructor( private http: HttpClient) {
     this.appId = "devportal-demo-20180625";
     this.appCode = "9v2BkviRwi9Ot26kp2IysQ";
     this.weather = [];
 }

 public ngOnInit() {
   if(navigator.geolocation) {
     navigator.geolocation.getCurrentPosition(position => {
         this.getWeather(position.coords);
     });
 } else {
     console.error("The browser does not support geolocation...");
 }
  }


 public getWeather(coordinates: any) {
   this.http.jsonp("https://weather.cit.api.here.com/weather/1.0/report.json?product=forecast_7days_simple&latitude=" + coordinates.latitude + "&longitude=" + coordinates.longitude + "&app_id=" + this.appId + "&app_code=" + this.appCode, "jsonpCallback")
       .pipe(map(result => (<any>result).dailyForecasts.forecastLocation))
       .subscribe(result => {
           this.weather = result.forecast;
       }, error => {
           console.error(error);
       });
}
}