import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class InventoService {
  // private baseUrl = 'http://inventowebapis-env.eba-7bpn3x7j.us-east-2.elasticbeanstalk.com';
  //private baseUrl = 'http://127.0.0.1:4000/'
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }
  constructor(private http: HttpClient) { }

  getBarcodelist(): Observable<any> {
    let auth = JSON.parse(localStorage.getItem("credential")).id;
    console.log(auth);
    return this.http.get(`${environment.inventoServer}/barcodes/${auth}`);
  }
  getInventorylist(): Observable<any> {
    let auth = JSON.parse(localStorage.getItem("credential")).id;
    return this.http.get(`${environment.inventoServer}/inventory/${auth}`);
  }
  getFrequentLevel1list(): Observable<any> {
    return this.http.get(`${environment.inventoServer}/frequentLevel1`);
  }
  getFrequentLevel2list(): Observable<any> {
    return this.http.get(`${environment.inventoServer}/frequentLevel2`);
  }
  getFrequentLevel3list(): Observable<any> {
    return this.http.get(`${environment.inventoServer}/frequentLevel3`);
  }
  getCommonProductlist(): Observable<any> {
    return this.http.get(`${environment.inventoServer}/commonProduct`);
  }
  getProductRelationlist(): Observable<any> {
    return this.http.get(`${environment.inventoServer}/productRelation`);
  }
  registerInventory(form: Object): Observable<any> {
    let auth = JSON.parse(localStorage.getItem("credential")).id;
    console.log(auth);
    return this.http.post(`${environment.inventoServer}/inventory/${auth}`, form);
  }
}

