import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  //private baseUrl = 'http://inventowebapis-env.eba-7bpn3x7j.us-east-2.elasticbeanstalk.com/categories';
  //private baseUrl = 'http://127.0.0.1:4000/categories';

  constructor(private http: HttpClient) { }

  getCategory(_id: string): Observable<any> {
    return this.http.get(`${environment.inventoServer}/categories/${_id}`);
  }

  createCategory(category: Object): Observable<Object> {
    let auth = JSON.parse(localStorage.getItem("credential")).id;
    console.log(auth);
    return this.http.post(`${environment.inventoServer}/categories/${auth}`, category);
  }

  updateCategory(_id: string, value: any): Observable<Object> {
    return this.http.put(`${environment.inventoServer}/categories/${_id}`, value);
  }

  deleteCategory(_id: string): Observable<any> {
    return this.http.delete(`${environment.inventoServer}/categories/${_id}`, { responseType: 'text' });
  }

  getCategorylist(): Observable<any> {
    let auth = JSON.parse(localStorage.getItem("credential")).id;
    console.log(auth);
    return this.http.get(`${environment.inventoServer}/categories/${auth}`);
  }
}
