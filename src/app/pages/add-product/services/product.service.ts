import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  constructor(private http : HttpClient){}
  private apiserverUrlji=environment.apiBaseUrlji;
  public loadProductTableData(): Observable<Product[]> {
  

      return this.http.get<Product[]>(`${this.apiserverUrlji}/product/products`)

  }

  deleteProduct(id){
    const deleteEndpoint =`${this.apiserverUrlji}/product/deleteproduct/`+ id;
    return this.http.delete(deleteEndpoint)
  }

  removePromotion(id){
    const promotionendpoint =`${this.apiserverUrlji}/product/annulerpromotion/`+ id ;
    return this.http.get(promotionendpoint)
  }

  addPromotion(id,p){
    const promotionendpoint =`${this.apiserverUrlji}/product/promotion/`+ id +`/`+p ;
    return this.http.get(promotionendpoint)
    
  }

  addProduct(selectedid,data){

    const addendpoint =`${this.apiserverUrlji}/product/addproduct/`+selectedid;
    return this.http.post(addendpoint,data)
  }

  public getProduct(id: number): Observable<Product> {
    const getendpoint =`${this.apiserverUrlji}/product/findproduct/`+id;
    return this.http.get<Product>(getendpoint);
  }

  updateProduct(product: Product){
    const putendpoint =`${this.apiserverUrlji}/product/modifyproduct`;
    return this.http.put(putendpoint,product);
  
}
}