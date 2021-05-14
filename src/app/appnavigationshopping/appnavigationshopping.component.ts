import { Component, OnInit } from '@angular/core';
import { AuthService } from '.././services/auth.service';

import { Router } from '@angular/router';
import {  ProductService} from ".././services/product.service";
@Component({
  selector: 'app-appnavigationshopping',
  templateUrl: './appnavigationshopping.component.html',
  styleUrls: ['./appnavigationshopping.component.scss']
})
export class AppnavigationshoppingComponent implements OnInit {

  constructor(private authService: AuthService,
    private proser:ProductService,
    public router: Router) { }

  ngOnInit(): void {

    this.getNotif();

    this.isLoggedIn = this.authService.isLoggedIn();
    this.username = this.authService.getLoggedInUser();

    this.authService.loginSubject.asObservable().subscribe(() => {
      this.isLoggedIn = this.authService.isLoggedIn();
      this.username = this.authService.getLoggedInUser();
    });
  }

  isLoggedIn: boolean;
  username: string;
  roles: string[];
fg1 : any;
  fg :number;

  getNotif(){
    this.proser.getColisenattend().subscribe(res=>{
               this.fg1 =res;
              console.log(res);
              alert(res);
               this.fg = this.fg1.length ;
    });
  }

  logout() {
    this.authService.logout();
    this.authService.loginSubject.next(null);
    this.router.navigate(['welcome']);
  }

  isUserInRole(role) {
    if (role === 'admin') {
      return this.authService.isUserAdmin();
    }
    return false;
  }


}
