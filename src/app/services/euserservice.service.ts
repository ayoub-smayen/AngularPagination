import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Euser } from '../models/euser';
import { Observable } from 'rxjs';




@Injectable({ providedIn: 'root' })
export class EuserserviceService {
    constructor(private http: HttpClient) { }

    getAllUsers() {
        return this.http.get("http://localhost:8091/api/euser/get");
    }
  /*  getAllUsers() : Observable<string[]> {
        return this.http.get<string[]>("http://localhost:8091/api/euser/get");
        }*/

       
    getById(id: number) {
        return this.http.get    ("http://localhost:8091/api/euser/finduserbyid/"+id);
        
    }
    getUser() {
        return this.http.get("http://localhost:8091/api/euser/get/");
    }

    
   // http://localhost:8091/api/uploadimage???

    addUser(user: Euser) {
         return this.http.post("http://localhost:8091/api/euser/add",user);
    }

    update(id: number, user: Euser) {
        return this.http.put("http://localhost:8091/api/euser/update"+id,user,{responseType:'text' as 'json'});
    }

    delete(id: number) {
        return this.http.delete("http://localhost:8091/api/euser/delete"+id);
    }

   

}