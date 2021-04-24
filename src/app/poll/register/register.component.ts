import { Component, OnInit } from '@angular/core';
import {  AuthService} from "../.././services/auth.service";

import {  Router} from "@angular/router";
import { FlashMessagesService } from "angular2-flash-messages";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  username: string;
  password: string;
  email: string;
  password2: string;
  constructor(private authService: AuthService, private router: Router, private flashMessage: FlashMessagesService) { }


  ngOnInit(): void {
  }

  register(f) {
    this.authService.register(this.username,this.email, this.password).subscribe(success => {
      this.router.navigate(['/']);
      // tslint:disable-next-line:max-line-length
      this.flashMessage.show('You are successfully registered! You can now login.', { cssClass: 'card-panel green lighten-4', timeout: 3000 });
    }, error => {
      this.flashMessage.show('Something went wrong', { cssClass: 'card-panel red lighten-3', timeout: 3000 });
    });
  }

}
