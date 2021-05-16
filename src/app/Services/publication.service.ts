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

  public getUser(){
    return this.http.get("http://localhost:8080/pi/RetrieveUser");
  }
  public getUserByID(id:any){
    return this.http.get("http://localhost:8080/pi/getuserById/"+id);
  }
  public getUserByname(name:string){
    return this.http.get("http://localhost:8080/pi/getuserbyname/"+name);
  }

  public AddPublication(pub:Publication,id:any){
    return this.http.post("http://localhost:8080/pi/AddPublication/"+id,pub);
  }

  public getpubALaUne(){
    return this.http.get("http://localhost:8080/pi/GetPubAlaune");
  }
  public getLatestpub(){
    return this.http.get("http://localhost:8080/pi/getLatestpub");
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
  public Addlikecomments(id:number){
    return this.http.put("http://localhost:8080/pi/AddLikecomments/"+id,{});
  }
  public deleteComments(id:number){
    return this.http.delete("http://localhost:8080/pi/deleteComment/"+id);
  }
  public getcommentbyid(id:number){
    return this.http.delete("http://localhost:8080/pi/getcommentbyId/"+id);
  }
  public updatecomment(com: Comments, id:number){
    return this.http.put("http://localhost:8080/pi/updatecomment/"+id,com);
  }
}
