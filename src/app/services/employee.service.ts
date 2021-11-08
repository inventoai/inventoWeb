import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

//const baseUrl = 'http://localhost:8080';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<any> {
    return this.http.get(`${environment.inventoServer}`);
  }

  get(id): Observable<any> {
    return this.http.get(`${environment.inventoServer}/${id}`);
  }

  create(data): Observable<any> {
    return this.http.post(`${environment.inventoServer}`, data);
  }

  update(id, data): Observable<any> {
    return this.http.put(`${environment.inventoServer}/${id}`, data);
  }

  delete(id): Observable<any> {
    return this.http.delete(`${environment.inventoServer}/${id}`);
  }

  deleteAll(): Observable<any> {
    return this.http.delete(`${environment.inventoServer}`);
  }

  findByTitle(title): Observable<any> {
    return this.http.get(`${environment.inventoServer}?title=${title}`);
  }
}
