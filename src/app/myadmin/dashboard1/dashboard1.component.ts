import { Component, OnInit } from '@angular/core';
import { AuthService } from "../.././services/auth.service";
import { Router } from "@angular/router";
@Component({
  selector: 'app-dashboard1',
  templateUrl: './dashboard1.component.html',
  styleUrls: ['./dashboard1.component.scss']
})
export class Dashboard1Component implements OnInit {

  constructor(private authService: AuthService,
   // private proser:ProductService,
    public router: Router) { }

  ngOnInit(): void {
  }
  
  logout() {
    this.authService.logout();
    this.authService.loginSubject.next(null);
    this.router.navigate(['welcome']);
  }
}
