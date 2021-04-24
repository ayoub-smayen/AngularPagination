import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject, of, Subject } from 'rxjs';
import { JwtHelperService } from '@auth0/angular-jwt';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import {  Profile} from ".././models/profile";
import { User } from '../models/user';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }
  jwtHelper: JwtHelperService = new JwtHelperService();

  loginSubject = new BehaviorSubject<any>(null);

  login(username, password) {
    return this.http.post('api1/auth/login', { username: username, password: password });
  }


  editProfile(p:Profile){
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': localStorage.getItem('jwt') !== null ? 'Bearer ' + localStorage.getItem('jwt') : ''
      })
    };
    return this.http.put("/api1/user/editprof",p,httpOptions);

  }

  getCuurentUser() : Observable<User>{
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': localStorage.getItem('jwt') !== null ? 'Bearer ' + localStorage.getItem('jwt') : ''
      })
    };

    return this.http.get<User>("api1/auth/cuurentUser",httpOptions);

  }

  
  getprofile(){
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': localStorage.getItem('jwt') !== null ? 'Bearer ' + localStorage.getItem('jwt') : ''
      })
    };
    return this.http.get("http://localhost:8091/api1/user/getprofile",httpOptions);

  }
  register(username,email, password) {
    return this.http.post('api1/auth/register', { username: username, email:email,password: password });
  }

  storeToken(data): Observable<void> {
    localStorage.setItem('jwt', data.token);
    return of(null);
  }

  getToken() {
    localStorage.getItem('jwt');
  }

  getLoggedInUser(): string {

    if (this.isLoggedIn()) {
      return this.jwtHelper.decodeToken(localStorage.getItem('jwt')).sub;
    }
    return null;
  }

  logout() {
    localStorage.removeItem('jwt');
  }

  isLoggedIn(): boolean {
    // check if token is expired here!
    return localStorage.getItem('jwt') !== null && !this.jwtHelper.isTokenExpired(localStorage.getItem('jwt'));
  }

  isUserAdmin() {
    let roles: string[] = [];
    if (localStorage.getItem('jwt')) {
      roles = this.jwtHelper.decodeToken(localStorage.getItem('jwt')).roles;
      return roles.includes('ROLE_ADMIN');
    }
    return false;

  }
}
