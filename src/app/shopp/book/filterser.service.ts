import { Injectable } from '@angular/core';
import { Observable,of } from 'rxjs';
import { Product } from 'src/app/models/product';
import { map, delay } from 'rxjs/operators';
import { ProductService } from "../.././services/product.service";
@Injectable({
  providedIn: 'root'
})
export class FilterserService {

  products : Product[];
  constructor(private prodserv : ProductService) {

     this.prodserv.getAllproducts().subscribe(res=>{
       this.products = res;
     })
   }

  filterCountries(filter?: any): Observable<Product[]> {

    return of(this.products).pipe(
      delay(2000),
      map(c => {
        // if filter is empty return all countries
        if (!filter) {
          return c;
        }
    
        // search for specific countries_
        const filteredCountries: Product[] = [];
    
        c.filter(function(country) {
          if (country.productname.toLowerCase().includes(filter.toLowerCase())) {
            filteredCountries.push(country);
          }
        });
    
        return filteredCountries;
      })
    );
  }

}
