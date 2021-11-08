import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DatabaseApiService {
  //private apiServer = "http://localhost:3000";
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }
  constructor(private http: HttpClient) { }

  getBusinessLocation(): Observable<any[]> {
    return this.http.get<any[]>(`${environment.inventoServer}/businesslocation`)
  }
  getProduct(): Observable<any[]> {
    return this.http.get<any[]>(`${environment.inventoServer}/product`)
  }
  getCotegory(): Observable<any[]> {
    return this.http.get<any[]>(`${environment.inventoServer}/cotegory`)
  }
  getForecastSales(): Observable<any[]> {
    return this.http.get<any[]>(`${environment.inventoServer}/forecastsales`)
  }

}
