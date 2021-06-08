import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { environment } from 'src/environments/environment';

import { Category } from '../models/Category';


@Injectable({
  providedIn: 'root'
})


export class CategoryService {
  constructor(private http : HttpClient){}
  private apiserverUrlji=environment.apiBaseUrlji;
  public loadCategoryTableData(): Observable<Category[]> {
  

      return this.http.get<Category[]>(`${this.apiserverUrlji}/productcategory/productcategories`)

  }

  deleteCategory(id){
    const deleteEndpoint =`${this.apiserverUrlji}/productcategory/removeproductcategory/`+ id;
    return this.http.delete(deleteEndpoint)
  }

}
