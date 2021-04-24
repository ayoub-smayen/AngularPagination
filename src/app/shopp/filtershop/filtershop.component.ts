import { Component, OnInit, Input , Output, EventEmitter } from '@angular/core';
import { HttpClient , HttpHeaders } from "@angular/common/http";
import { Product } from 'src/app/models/product';

@Component({
  selector: 'app-filtershop',
  templateUrl: './filtershop.component.html',
  styleUrls: ['./filtershop.component.scss']
})
export class FiltershopComponent implements OnInit {
  

  @Input()  searchname :string ;
 // @Input() searchPrice : number;
  products : Product[];


  @Output() searchEvent  = new EventEmitter();


  constructor(private http :HttpClient) { }

  ngOnInit(): void {
  }

  searcht(){
//
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': localStorage.getItem('jwt') !== null ? 'Bearer ' + localStorage.getItem('jwt') : ''
      })
    };

return this.http.get<Product[]>(`http://localhost:8091/api/findproduct/${this.searchname}`).subscribe(res=>{
  this.products = res;
  this.searchEvent.emit(this.products);
});

     
  }



}
