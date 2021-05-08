import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RayService {

  constructor(private http:HttpClient) { }

  public getRayons(){
    return this.http.get("http://localhost:8091/rayon/showRay");
  }
  public getcat(id:number){
    return this.http.get("http://localhost:8091/rayon/showcat/"+id);
  }
}
