import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-productexcel',
  templateUrl: './productexcel.component.html',
  styleUrls: ['./productexcel.component.scss']
})
export class ProductexcelComponent implements OnInit {

  constructor(private http:HttpClient) { }

  ngOnInit(): void {

    //this.play();
  }


   URL_PLAY ="http://localhost:8091/api/play";


    play(){




      const httpOptions = {
        headers: new HttpHeaders({
          'Content-Type': 'text/plain',
          'Authorization': localStorage.getItem('jwt') !== null ? 'Bearer ' + localStorage.getItem('jwt') : ''
        }),
        
      };
  

        return  this.http.get(this.URL_PLAY,httpOptions).subscribe(res=>{
              console.log(res);
        })
    }

    
}
