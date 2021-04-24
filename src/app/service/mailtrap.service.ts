import { Injectable } from '@angular/core';


import {  HttpClient} from "@angular/common/http";
@Injectable({
  providedIn: 'root'
})
export class MailtrapService {

  constructor(private httpc :  HttpClient) { }

  postMail(em){
    return this.httpc.post("mail/send-mail",em);

  }
}
