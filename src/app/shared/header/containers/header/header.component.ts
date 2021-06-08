import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

import { Email } from '../../../../pages/auth/models';
import { AuthService, EmailService } from '../../../../pages/auth/services';
import { routes } from '../../../../consts';
import { Users } from 'src/app/pages/users/models';
import { DToken } from 'src/app/pages/auth/models/d-token';
import jwt_decode from 'jwt-decode';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  @Input() isMenuOpened: boolean;
  @Output() isShowSidebar = new EventEmitter<boolean>();
  public user: Users = {
    email: '',
    password: '',
    id: 1,
    updatedAt: '',
    active: true,
    role: '',
    username: '',
    number: 1,
    firstname: '',
    lastname: '',
    createdAt: '',
  };
  public emails$: Observable<Email[]>;
  public routers: typeof routes = routes;
  public token: string;
  public decoded: DToken;

  constructor(
    private userService: AuthService,
    private emailService: EmailService,
    private router: Router
  ) {
    //this.user$ = this.userService.getUser();
    this.emails$ = this.emailService.loadEmails();
  }

  ngOnInit() {
    this.token = localStorage.getItem('token');
    this.decoded = jwt_decode(this.token);
    this.getUserdetails();
  }

  public getUserdetails(): void {
    this.userService
      .getUser(this.decoded.sub, this.decoded.authorities[0])
      .subscribe((res) => {
        this.user = res;
      });
  }

  public openMenu(): void {
    this.isMenuOpened = !this.isMenuOpened;

    this.isShowSidebar.emit(this.isMenuOpened);
  }

  public signOut(): void {
    this.userService.signOut();

    this.router.navigate([this.routers.LOGIN]);
  }
}
