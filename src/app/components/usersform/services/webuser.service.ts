import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class WebuserService {
 //private baseUrl = 'http://inventowebapis-env.eba-7bpn3x7j.us-east-2.elasticbeanstalk.com/employees';
 //private baseUrl = 'http://127.0.0.1:4000';
 //private baseUrl1 = 'http://127.0.0.1:4000/webusers';

 constructor(private http: HttpClient) { }

 getWebUser(_id: string): Observable<any> {
   return this.http.get(`${environment.inventoServer}/webusers/${_id}`);
 }

 createWebUser(webUser: Object): Observable<Object> {
   return this.http.post(`${environment.inventoServer}/webuserregister`, webUser);
 }

 updateWebUser(_id: string, value: any): Observable<Object> {
   return this.http.put(`${environment.inventoServer}/webusers/${_id}`, value);
 }

 deleteWebUser(_id: string): Observable<any> {
   return this.http.delete(`${environment.inventoServer}/${_id}`, { responseType: 'text' });
 }

 getWebUsersList(): Observable<any> {
   return this.http.get(`${environment.inventoServer}/webuserregister`);
 }
}
