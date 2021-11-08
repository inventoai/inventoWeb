import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class UserApiService {


  //private apiServer = "http://localhost:3000";
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }
  constructor(private http: HttpClient) { }

  get(): Observable<any[]> {
    return this.http.get<any[]>(`${environment.inventoServer}/users`);
  }
  getInventory(): Observable<any[]> {
    return this.http.get<any[]>(`${environment.inventoServer}/inventorycount`);
  }
  getFrequent1(): Observable<any[]> {
    return this.http.get<any[]>(`${environment.inventoServer}/frequent1`);
  }
  getCommonProduct(): Observable<any[]> {
    return this.http.get<any[]>(`${environment.inventoServer}/commonproduct`);
  }
  getProductRelation(): Observable<any[]> {
    return this.http.get<any[]>(`${environment.inventoServer}/productrelation`)
  }
  getProductWise(): Observable<any[]> {
    return this.http.get<any[]>(`${environment.inventoServer}/productwise`)
  }
}
