import { Injectable } from '@angular/core';
import { Lcomment } from "../models/lcomment";
import {HttpClient, HttpHeaders  } from "@angular/common/http";
import {  Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CommentService {

  constructor(private http: HttpClient) { }

  getPolls(): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': localStorage.getItem('jwt') !== null ? 'Bearer ' + localStorage.getItem('jwt') : ''
      })
    };
    return this.http.get('api/comments', httpOptions);
  }

  getPollsForUser(username): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': localStorage.getItem('jwt') !== null ? 'Bearer ' + localStorage.getItem('jwt') : ''
      })
    };
    return this.http.get('api/comments/user/' + username, httpOptions);
  }
/*
  getPoll(id): Observable<any> {
    return this.http.get('api1/polls/' + id);
  }
*/
  savePoll(poll: Comment): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': localStorage.getItem('jwt') !== null ? 'Bearer ' + localStorage.getItem('jwt') : ''
      })
    };
    return this.http.post('api/addComment', poll, httpOptions);
  }

}
