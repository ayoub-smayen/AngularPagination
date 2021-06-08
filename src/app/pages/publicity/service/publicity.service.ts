import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Publicity } from '../models/publicity';

@Injectable({
  providedIn: 'root'
})
export class PublicityService {

  constructor(private http : HttpClient){}
  private apiserverUrlji=environment.apiBaseUrlji;
  public getPublicities(): Observable<Publicity[]> {
  

      return this.http.get<Publicity[]>(`${this.apiserverUrlji}/publicity/publicities`)

  }
  deletePublicity(id){
    const deleteEndpoint =`${this.apiserverUrlji}/publicity/removepublicity/`+ id;
    return this.http.delete(deleteEndpoint)
  }

  addPublicity(idproduct,data){

    const addendpoint =`${this.apiserverUrlji}/publicity/addpublicity/`+idproduct;
    return this.http.post(addendpoint,data)
  }
}
