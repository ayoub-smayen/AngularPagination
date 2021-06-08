import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { routes } from 'src/app/consts';
import { AuthService } from '../../services';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss'],
})
export class LoginFormComponent implements OnInit {
  public form: FormGroup;
  public Username: string;
  public Password: string;
  public routers: typeof routes = routes;

  public ngOnInit(): void {
    this.form = new FormGroup({
      username: new FormControl(this.Username, [Validators.required]),
      password: new FormControl(this.Password, [Validators.required]),
    });
  }
  constructor(private service: AuthService, private router: Router) {}

  public sendLoginForm(): void {
    if (this.form.valid) {
      this.service.login(this.form.value).subscribe((result) => {
        if (result.accessToken) {
          localStorage.setItem('token', result.accessToken);
          this.router.navigate([this.routers.DASHBOARD]).then();
        }
      });
    }
  }
}
