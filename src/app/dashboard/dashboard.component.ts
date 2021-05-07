import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Dashboard } from '../models/dashboard';
import { DashboardserviceService } from '../services/dashboardservice.service';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private route: ActivatedRoute, 
    private router: Router,private dhashboardserviceService: DashboardserviceService ) { }

   
  ngOnInit() {
}


}
