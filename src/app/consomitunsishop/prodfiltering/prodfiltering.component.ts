import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-prodfiltering',
  templateUrl: './prodfiltering.component.html',
  styleUrls: ['./prodfiltering.component.scss']
})
export class ProdfilteringComponent implements OnInit {


  
   URL_CATEGORIES  = "http://localhost:8091/api/cat";
   PRODUCT_URL = "http://localhost:8091/api/productstunsi1";

   URL_CAT = "http://localhost:8091/api/cat/";
     
     categories  : any;


     products:any ; 

     category  :  any =null  ;
     
  constructor(private http: HttpClient) { }

  ngOnInit(): void {

    this.getAllProducts();

     this.getCategories();
  }
 

     getAllProducts(){

          return   this.http.get(this.PRODUCT_URL).subscribe(res=>{
               console.log(res);
                 this.products  = res;

          })
     }

     getCategories(){

      const httpOptions = {
        headers: new HttpHeaders({
          'Content-Type': 'application/json',
          'Authorization': localStorage.getItem('jwt') !== null ? 'Bearer ' + localStorage.getItem('jwt') : ''
        }),
        
      };
            return this.http.get(this.URL_CATEGORIES,httpOptions).subscribe(res=>{
                  console.log(res);

                  this.categories  =res;
            })
     }

//  {{    id  : rt  ,   }}
        getCatgeoryId(id:number){

          alert(id);

            return this.http.get(this.URL_CAT +  id).subscribe(res=>{
                this.category  =res; 
           alert(res);

            })
        }
  

        



}
