import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ExportExcelService } from '../services/export-excel.service';

@Component({
  selector: 'app-home1',
  templateUrl: './home1.component.html',
  styleUrls: ['./home1.component.css']
})
export class Home1Component implements OnInit {
 

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

