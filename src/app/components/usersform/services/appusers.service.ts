import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AppusersService {

  //private baseUrl = 'http://inventowebapis-env.eba-7bpn3x7j.us-east-2.elasticbeanstalk.com/employees';
  //private baseUrl = 'http://127.0.0.1:4000';


  constructor(private http: HttpClient) { }

  getAppUser(_id: string): Observable<any> {
    return this.http.get(`${environment.inventoServer}/${_id}`);
  }

  createAppUser(employee: Object): Observable<Object> {
    let auth = JSON.parse(localStorage.getItem("credential")).id;
    return this.http.post(`${environment.inventoServer}/appusers/${auth}`, employee);
  }

  updateAppUser(_id: string, value: any): Observable<Object> {
    return this.http.put(`${environment.inventoServer}/${_id}`, value);
  }

  deleteAppUser(_id: string): Observable<any> {
    return this.http.delete(`${environment.inventoServer}/${_id}`, { responseType: 'text' });
  }

  getAppUsersList(): Observable<any> {
    let auth = JSON.parse(localStorage.getItem("credential")).id;
    return this.http.get(`${environment.inventoServer}/appusers/${auth}`);
  }
}
