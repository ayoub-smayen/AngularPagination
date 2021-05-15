import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'deliveryModule';

  ngOnInit(): void {
    
    let lat1 = window["latitude"];
    let long1 = window["longitude"];
    }


}
