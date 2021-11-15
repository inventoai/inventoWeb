import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class BusineslocationService {

  //private baseUrl = 'http://inventowebapis-env.eba-7bpn3x7j.us-east-2.elasticbeanstalk.com/businesslocations';
  //private baseUrl = 'http://127.0.0.1:4000/businesslocations';
  constructor(private http: HttpClient) { }

  getLocation(_id: string): Observable<any> {
    return this.http.get(`${environment.inventoServer}/businesslocations/${_id}`);
  }

  createLocation(location: Object): Observable<Object> {
    let auth = JSON.parse(localStorage.getItem("credential")).id;
    console.log(auth);
    return this.http.post(`${environment.inventoServer}/businesslocations/${auth}`, location);
  }

  updateLocation(_id: string, value: any): Observable<Object> {
    return this.http.put(`${environment.inventoServer}/businesslocations/${_id}`, value);
  }

  deleteLocation(_id: string): Observable<any> {
    return this.http.delete(`${environment.inventoServer}/businesslocations/${_id}`, { responseType: 'text' });
  }

  getLocationlist(): Observable<any> {
    let auth = JSON.parse(localStorage.getItem("credential")).id;
    console.log(auth);
    return this.http.get(`${environment.inventoServer}/businesslocations/${auth}`);
  }
}
