import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-views',
  templateUrl: './views.component.html',
  styleUrls: ['./views.component.css']
})
export class ViewsComponent implements OnInit {

  constructor(private http:HttpClient) { }

  ngOnInit(): void {
  }
 
  num=0;
  getAppvisit()
  {
   const httpOptions = {
     headers: new HttpHeaders({'Content-Type': 'text/plain'})
   };
 
  return  this.http.get("http://localhost:8091/api/lvisit",httpOptions).subscribe((res:number) =>{
     
 alert(res);
 this.num = res;
 
          
 });
 }
}
