import { AuthService } from '../.././services/auth.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor(private authService: AuthService,
    public router: Router) { }


    isLoggedIn: boolean;
  username: string;
  roles: string[];

  ngOnInit(): void {

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
