import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Comments } from '../Model/Comments';
import { Publication } from '../Model/publication';

@Injectable({
  providedIn: 'root'
})
export class PublicationService {

  constructor(private http:HttpClient) { }
  public getpub(){
    return this.http.get("http://localhost:8080/pi/GetPubAlaune");
  }
  public getpubNumber(){
    return this.http.get("http://localhost:8080/pi/PubNumber");
  }
  public getpubdetails(id:number){
    return this.http.get("http://localhost:8080/pi/RetrievePublication/"+id);
  }
  public getCommentsById(id:number){
    return this.http.get("http://localhost:8080/pi/RetrieveComments/"+id);
  }
  public AddComments(user_id:number,pub_id:number,com:Comments){
    return this.http.post<Comments>("http://localhost:8080/pi/AddComments/"+user_id+"/"+pub_id,com);
  }
  public Addlikepublication(id:number){
    return this.http.put("http://localhost:8080/pi/AddLikeposts/"+id,{});
  }
  public Adddislikepublication(id:number){
    return this.http.put("http://localhost:8080/pi/AdddisLikeposts/"+id,{});
  }
}
