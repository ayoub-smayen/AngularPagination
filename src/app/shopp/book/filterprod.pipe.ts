import { Pipe, PipeTransform } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from 'src/app/models/product';
import { FilterserService } from './filterser.service';

@Pipe({
  name: 'filterprod'
})
export class FilterprodPipe implements PipeTransform {


  constructor( private filterser : FilterserService){}
  transform(value: string, filterrte?: any ): Observable<Product[]> {

    return this.filterser.filterCountries(filterrte);
  }

}
