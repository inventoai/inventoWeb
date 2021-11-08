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
    return this.http.get(`${environment.inventoServer}/barcodes`);
  }
  getInventorylist(): Observable<any> {
    return this.http.get(`${environment.inventoServer}/inventory`);
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
}

