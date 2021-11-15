import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

 // private baseUrl = 'http://inventowebapis-env.eba-7bpn3x7j.us-east-2.elasticbeanstalk.com/products';
  //private baseUrl = 'http://127.0.0.1:4000/products';

  constructor(private http: HttpClient) { }

  getProduct(_id: string): Observable<any> {
    return this.http.get(`${environment.inventoServer}/products/${_id}`);
  }

  createProduct(product: Object): Observable<Object> {
    let auth = JSON.parse(localStorage.getItem("credential")).id;
    console.log(auth);
    return this.http.post(`${environment.inventoServer}/products/${auth}`, product);
  }

  updateProduct(_id: string, value: any): Observable<Object> {
    return this.http.put(`${environment.inventoServer}/products/${_id}`, value);
  }

  deleteProduct(_id: string): Observable<any> {
    return this.http.delete(`${environment.inventoServer}/products/${_id}`, { responseType: 'text' });
  }

  getProductlist(): Observable<any> {
    let auth = JSON.parse(localStorage.getItem("credential")).id;
    console.log(auth);
    return this.http.get(`${environment.inventoServer}/products/${auth}`);
  }
}
