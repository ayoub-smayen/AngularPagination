import { Component,OnInit } from '@angular/core';
import { AuthService } from '././services/auth.service';

import { Router } from '@angular/router';
import {  ProductService} from "././services/product.service";
declare const google: any;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'shopperspringt';


  constructor(private authService: AuthService,
    private proser:ProductService,
    public router: Router) { this.fg=0;}

hide =  false  ;
    isLoggedIn: boolean;
  username: string;
  roles: string[];
fg1 : any;
  fg :number;
term :string ;
  getNotif(){
    this.proser.getColisenattend().subscribe(res=>{
               this.fg1 =res;
              console.log(res);
              alert(res);
               this.fg = this.fg1.length ;
    });
  }

  ngOnInit(): void {



    
  //}










    this.getNotif();

    this.isLoggedIn = this.authService.isLoggedIn();
    this.username = this.authService.getLoggedInUser();

    this.authService.loginSubject.asObservable().subscribe(() => {
      this.isLoggedIn = this.authService.isLoggedIn();
      this.username = this.authService.getLoggedInUser();
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
