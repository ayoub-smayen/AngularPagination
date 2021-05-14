import { HttpClient , HttpHeaders} from '@angular/common/http';
import { Component, OnInit } from '@angular/core';



class Profit{
  month : '';
  gain : 0;
  income :0;
  outcome : 0;

  constructor(month , gain,income,outcome){
      this.gain  =gain ;
      this.month = month;
      this.outcome=outcome ;
      this.income  =  income;
  }
}

@Component({
  selector: 'app-homeadmin',
  templateUrl: './homeadmin.component.html',
  styleUrls: ['./homeadmin.component.scss']
})
export class HomeadminComponent implements OnInit {


   profits : Profit[];
   gh  :any ;
  constructor(private http : HttpClient) {  

    this.profits = [ ];
  }

  ngOnInit(): void {

    this.getAppProfiits();


     if(window.onload) 
     
     this.getAppvisit();



  }

  //http://localhost:8091/api/lvisit    // 'Authorization': localStorage.getItem('jwt') !== null ? 'Bearer ' + localStorage.getItem('jwt') : ''





 num  = 0;



  getAppvisit(){
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'text/plain',
      
      })
    };
  
   return  this.http.get("http://localhost:8091/api/lvisit",httpOptions).subscribe((res:number) =>{
      
  alert(res);
     


     this.num = res;
  
  
  /*
  console.log(this.gh);
      this.gh.forEach(element => {
  
         this.profits.push(new Profit(element.month  ,   
             Math.abs(element.income   - element.outcome)   /  element.outcome 
           
           ))
        
      });
    */  
   })
  
       
  }



getAppProfiits(){
  const httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': localStorage.getItem('jwt') !== null ? 'Bearer ' + localStorage.getItem('jwt') : ''
    })
  };

 return  this.http.get("/api/profits",httpOptions).subscribe((res:  Profit[]) =>{
    
alert(res);
   this.gh  = res; 

   this.profits =res;


/*
console.log(this.gh);
    this.gh.forEach(element => {

       this.profits.push(new Profit(element.month  ,   
           Math.abs(element.income   - element.outcome)   /  element.outcome 
         
         ))
      
    });
  */  
 })

     
}
    

}
