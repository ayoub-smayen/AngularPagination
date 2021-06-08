import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Users } from '../models';

@Injectable({
  providedIn: 'root',
})
export class AdminService {
  private apiServerUrl = environment.baseUrl;
  constructor(private http: HttpClient) {}

  public loadAdmins(): Observable<Users[]> {
    return this.http.get<Users[]>(`${this.apiServerUrl}/api/admins`);
  }
  public deleteAdmin(id): Observable<any> {
    return this.http.delete<any>(`${this.apiServerUrl}/api/admins?id=${id}`);
  }
}
